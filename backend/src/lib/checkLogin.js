const checkLogin = (ctx, next) => {
    console.log(ctx.state);
    if(!ctx.state.userstatus){
        ctx.status = 401;
        return;
    }
    return next();
}
export default checkLogin;