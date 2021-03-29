import {combineReducers} from 'redux';
import loading from './loading';
import {all} from 'redux-saga/effects';
import user, {userSaga} from './user';
import userstatus, {userStatusSaga} from './userStataus';
import readinfo, {userInfoSaga} from './userInfo';
const rootReducer = combineReducers({
    user, loading, userstatus, readinfo
});

export function* rootSaga(){
    yield all([userSaga(),userStatusSaga(), userInfoSaga()]);
}
export default rootReducer;