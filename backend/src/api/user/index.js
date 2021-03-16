import Router from 'koa-router';
import * as userApi from './userApi';

const user = new Router();

user.post('/register', userApi.register);
user.post('/login', userApi.login);
user.get('/check', userApi.check);
user.post('/logout', userApi.logout);

export default user