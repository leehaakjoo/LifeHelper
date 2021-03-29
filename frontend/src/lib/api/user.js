import client from './client';

export const register = ({username, password, email, phoneNumber, school}) =>
    client.post('/api/user/register', {username, password, email, phoneNumber, school});
export const login = ({username, password}) =>
    client.post('/api/user/login', {username, password});

export const check = () => client.get('/api/user/check');

export const logout = () => client.post('/api/user/logout');

export const readinfo = id => client.get(`/api/user/${id}`);