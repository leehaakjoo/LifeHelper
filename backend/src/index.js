const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/', ctx => {
    ctx.body = '홈';
});
router.get('/about', ctx => {
    ctx.body = '소개';
});
router.get('/login', ctx => {
    ctx.body = '로그인';
});
app.use(router.routes()).use(router.allowedMethods());

const port =  4000;

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})