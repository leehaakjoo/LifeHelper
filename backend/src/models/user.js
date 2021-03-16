import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
    username: String,
    hashedPassword: String,
    email: String,
    phoneNumber: String,
    school: String,
});

UserSchema.methods.setPassword = async function(password){ //패스워드를 hashedPassword로 바꿈
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
};
UserSchema.methods.checkPassword = async function(password){ //파라미터로 받은 비밀번호가 해당 계정의 비밀번호와 일치하는지 검증
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result;
};

UserSchema.statics.findByUsername = function(username){ //username으로 데이터를 찾을 수 있도록 한다.
    return this.findOne({ username });
};

UserSchema.methods.generateToken = function() {
    const token = jwt.sign(
        {
            _id: this.id,
            username: this.username
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '7d',
        },
    );
    return token;
}
const User = mongoose.model('User', UserSchema);
export default User;