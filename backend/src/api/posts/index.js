import Router from 'koa-router';
import * as postsApi from './postApi';

const posts = new Router();

posts.get('/', postsApi.list);
posts.post('/', postsApi.write);

posts.get('/:id', postsApi.read);
posts.delete('/:id', postsApi.remove);
posts.patch('/:id', postsApi.update);

export default posts;