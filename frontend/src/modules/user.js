import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';

const CHANGE_FIELD = 'user/CHANGE_FIELD';
const INITIALIZE_FORM = 'user/INITIALIZE_FORM';

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

const initialState = {
    register:{
        username: '',
        password: '',
        passwordValidation: '',
        email: '',
        school: '',
    },
    login:{
        username: '',
        password: '',
    },
};

const user = handleActions({
    [CHANGE_FIELD]: (state, {payload: {form, key, value} }) =>
        produce(state, draft =>{
            draft[form][key] = value;
        }),
    [INITIALIZE_FORM] : (state, {payload: form}) =>({
        ...state,
        [form]: initialState[form]
    })
});

export default user;
