require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser  from 'koa-bodyparser';
import mongoose from 'mongoose';
import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';

const app = new Koa();
const router = new Router();

const {PORT, MONGO_URI} = process.env;
const port = PORT || 4000;

import createFakeData from './createFakeData';

//몽고디비 연결
mongoose
.connect(MONGO_URI, {useNewUrlParser: true, useFindAndModify: false}, )
    .then(() => {
        console.log('Connected to MongoDB');
        })
    .catch(e => {
        console.error(e);
    });


router.use('/api', api.routes()); //api route 적용

app.use(bodyParser());
app.use(jwtMiddleware);

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('Listening to port %d', port);
});

