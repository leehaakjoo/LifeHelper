import Router from 'koa-router';
import * as postsApi from './postApi';
import checkLogin from '../../lib/checkLogin';

const posts = new Router();

posts.get('/', postsApi.list);
posts.post('/', checkLogin, postsApi.write);

posts.get('/:id', postsApi.getPostById, postsApi.read);
posts.delete('/:id', checkLogin, postsApi.getPostById, postsApi.checkOwnPost, postsApi.remove);
posts.patch('/:id', checkLogin, postsApi.getPostById, postsApi.checkOwnPost, postsApi.update);

export default posts;