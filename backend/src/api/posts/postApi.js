const Post = require('../../models/post');
const Joi = require('joi'); //객체를 검증하기 위한 라이브러리

export const write = async ctx => {
    const schema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
    });
    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400; // Bad request
        ctx.body = result.error;
        return;
    }
    const {title, body} = ctx.request.body;
    const post = new Post({
        title,
        body,
    });
    try{
        await post.save();
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const list = ctx => {

};
export const read = ctx => {

};
export const remove = ctx => {

};
export const update = ctx => {

};
