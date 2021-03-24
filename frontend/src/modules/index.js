import {combineReducers} from 'redux';
import loading from './loading';
import {all} from 'redux-saga/effects';
import user, {userSaga} from './user';
import userstatus, {userStatusSaga} from './userStataus';

const rootReducer = combineReducers({
    user, loading, userstatus
});

export function* rootSaga(){
    yield all([userSaga(),userStatusSaga()]);
}
export default rootReducer;