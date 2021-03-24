import {createAction, handleActions} from 'redux-actions';
import {takeLatest, call} from 'redux-saga/effects';
import * as userAPI from '../lib/api/user';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';

const TEMP_SET_USER = 'userstatus/TEMP_SET_USER';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('userstatus/CHECK');
const LOGOUT = 'userstatus/LOGOUT';

export const tempSetUser = createAction(TEMP_SET_USER, userstatus => userstatus);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);


const checkSaga = createRequestSaga(CHECK, userAPI.check);

function checkFailureSaga(){
    try{
        localStorage.getItem('userstatus');
    } catch(e){
        console.log('localStorage is not working');
    }
}

function* logoutSaga(){
    try{
        yield call(userAPI.logout);
        localStorage.removeItem('userstatus');
    } catch(e){
        console.log(e);
    }
}


export function* userStatusSaga() {
    yield takeLatest(CHECK, checkSaga);
    yield takeLatest(CHECK_FAILURE, checkFailureSaga);
    yield takeLatest(LOGOUT, logoutSaga);
}

const initialState = {
    userstatus: null,
    checkError: null,
};

export default handleActions(
    {
        [TEMP_SET_USER]: (state, {payload: userstatus}) => ({
            ...state,
            userstatus,
        }),
        [CHECK_SUCCESS]: (state, {payload: userstatus}) => ({
            ...state,
            userstatus,
            checkError: null,
        }),
        [CHECK_FAILURE]: (state, {payload: error}) => ({
            ...state,
            userstatus: null,
            checkError: error,
        }),
        [LOGOUT]: (state, {payload: userstatus}) => ({
            ...state,
            userstatus: null,
        }),
    }, initialState
);