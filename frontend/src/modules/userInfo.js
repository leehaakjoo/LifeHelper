import {createAction, handleActions} from 'redux-actions';
import {takeLatest, call} from 'redux-saga/effects';
import * as userAPI from '../lib/api/user';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';

const [READINFO, READINFO_SUCCESS, READINFO_FAILURE] = createRequestActionTypes('userinfo/READINFO');
const UNLOAD_USER = 'userinfo/UNLOAD_USER';

export const getinfo = createAction(READINFO, id => id);
export const unloadUser = createAction(UNLOAD_USER);

const readInfoSaga = createRequestSaga(READINFO, userAPI.readinfo);
export function *userInfoSaga(){    
    yield takeLatest(READINFO, readInfoSaga);
}

const initialState = {
    read : null,
    infoError: null,
};

const userinfo = handleActions(
    {
        [READINFO_SUCCESS]: (state, {payload: read}) => ({
            ...state,
            read,
        }),
        [READINFO_FAILURE]: (state, {payload: error}) => ({
            ...state,
            error,
        }),
        [UNLOAD_USER]: () =>initialState,
    }, initialState
);
export default userinfo;