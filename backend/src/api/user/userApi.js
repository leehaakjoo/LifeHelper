import Joi from 'joi';
import User from '../../models/user';
export const register = async ctx =>{
    const schema = Joi.object().keys({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(20)
            .required(),
        password: Joi.string().required(),
        email: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        school: Joi.string().required(),
    });
    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }
    const {username, password, email, phoneNumber, school} = ctx.request.body;
    try{
        const exists = await User.findByUsername(username);
        if(exists){
            ctx.status = 409 //conflict
            return;
        }
        
        const user = new User({
            username,
            password,
            email,
            phoneNumber,
            school,
        });
        await user.setPassword(password); //비밀번호 설정
        await user.save(); //저장
        const data = user.toJSON(); 
        delete data.hashedPassword; //응답할 데이터에서 hashedPassword 필드 제거
        ctx.body = data;
        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge : 1000* 60* 24* 7,
            httpOnly: true,
        });
    } catch(e){
        ctx.throw(500, e);
    }
};

export const login = async ctx =>{
    const {username, password} = ctx.request.body;
    if(!username || !password){
        ctx.status = 401; //unathorized
        return;
    }
    try{
        const user = await User.findByUsername(username); //username에 해당하는 User 데이터 반환
        if(!user){
            ctx.status = 401;
            return;
        }
        const valid = await user.checkPassword(password); //비밀번호 체크
        if(!valid){ //비밀번호 오류
            ctx.status = 401;
            return;
        }
        const data = user.toJSON(); //user를 JSON으로 변환
        delete data.hashedPassword; //hashed된 패스워드 데이터 삭제
        ctx.body = data; //ctx body에 데이터 삽입
        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge : 1000* 60* 24* 7,
            httpOnly: true,
        });
    } catch(e){
        console.log(e);
        ctx.throw(500, e);
    }
}
export const check = async ctx =>{
    const {user} = ctx.state;
    if(!user){
        ctx.status = 401;
        return;
    }
    ctx.body = user;
}
export const logout = async ctx =>{
    ctx.cookies.set('access_token');
    ctx.status = 204;
};
