import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeField, initializeForm, register} from '../modules/user';
import RegisterForm from '../components/user/RegisterForm';
import {check} from '../modules/userStataus';
import {withRouter} from 'react-router-dom';

const RegisterContainer = ({history}) => {
    const dispatch = useDispatch();
    const {form, user, userError, userstatus} = useSelector(({ user, userstatus }) => ({
        form: user.register,
        user: user.user,
        userError: user.userError,
        userstatus: userstatus.userstatus
    }));

    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value,
            }),
        );
    };
    const onSubmit = e => {
        e.preventDefault();
        const {username, password,passwordValidation, email,school, phoneNumber} = form;
        if(password !==passwordValidation){
            return;
        }
        dispatch(register({username, password, email, school, phoneNumber}));
    };
    useEffect(() => {
        if(userError){
            console.log('오류 발생');
            console.log(userError);
            return;
        }
        if(user){
            console.log('회원가입 성공');
            console.log(user);
            dispatch(check());
        }
         
    }, [user, userError, dispatch]);
    useEffect(() => {
        if(userstatus){
            history.push('/login');
        }
    }, [history, userstatus]);

    return(
        <RegisterForm
            type = 'register'
            form = {form}
            onChange = {onChange}
            onSubmit = {onSubmit}
        />
    );
}

export default withRouter(RegisterContainer);