const checkLogin = (ctx, next) => {
    console.log(ctx.state);
    if(!ctx.state.user){
        ctx.status = 401;
        return;
    }
    return next();
}
export default checkLogin;