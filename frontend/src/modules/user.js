import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes,} from '../lib/createRequestSaga';
import * as userAPI from '../lib/api/user';

const CHANGE_FIELD = 'user/CHANGE_FIELD';
const INITIALIZE_FORM = 'user/INITIALIZE_FORM';

const REGISTER = 'user/REGISTER';
const REGISTER_SUCCESS = 'user/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'user/REGISTER_FAILURE';

const LOGIN = 'user/LOGIN';
const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'user/LOGIN_FAILURE';

export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({
        form,
        key,
        value,
    }),
);

export const initializeForm = createAction(
    INITIALIZE_FORM,
    form => form
);

export const register = createAction(REGISTER, ({username, password, email, school, phoneNumber}) => ({
    username, password, email, school, phoneNumber
}));
const registerSaga = createRequestSaga(REGISTER, userAPI.register);

export const login = createAction(LOGIN, ({username, password}) => ({
    username, password
}));
const loginSaga = createRequestSaga(LOGIN, userAPI.login);

export function* userSaga(){
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
    
    register:{
        username: '',
        password: '',
        passwordValidation: '',
        email: '',
        school: '',
        phoneNumber: '',
    },
    login:{
        username: '',
        password: '',
    },
    userError: null,
};

const user = handleActions(
    {
        [CHANGE_FIELD]: (state, {payload: {form, key, value} }) =>
            produce(state, draft =>{
                draft[form][key] = value;
            }),
        [INITIALIZE_FORM] : (state, {payload: form}) =>({
            ...state,
            [form]: initialState[form]
        }),
        [REGISTER_SUCCESS]: (state, {payload: user}) => ({
            ...state,
            userError: null,
            user,
        }),
        [REGISTER_FAILURE]: (state, {payload: error}) => ({
            ...state,
            userError: error,
        }),
        [LOGIN_SUCCESS]: (state, {payload: user}) => ({
            ...state,
            userError: null,
            user,
        }),
        [LOGIN_FAILURE]: (state, {payload: error}) => ({
            ...state,
            userError: error,
            user: null,
        }),
    },
    initialState,
);

export default user;
