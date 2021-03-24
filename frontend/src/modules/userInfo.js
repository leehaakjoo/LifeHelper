import {createAction, handleActions} from 'redux-actions';
import {takeLatest, call} from 'redux-saga/effects';
import * as userAPI from '../lib/api/user';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';

const READINFO = 'userinfo/READINFO';
export const readInfo = createAction(READINFO, id => id);
const readInfoSaga = createRequestSaga(READINFO, userAPI.readInfo);

const initialState = {
    read : null,
    infoError: null,
};
function *userInfoSaga(){
    yield takeLatest(READINFO, readInfoSaga);
}

export default handleActions (
    {
        [USERINFO_SUCCESS]: (state, {payload: read}) => ({
            ...state,
            read,
        }),
        [USERINFO_FAILURE]: (state, {payload: error}) => ({
            ...state,
            infoError: error
        }),

    }
);