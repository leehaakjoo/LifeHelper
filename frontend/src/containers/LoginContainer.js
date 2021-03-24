import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeField, initializeForm, login} from '../modules/user';
import LoginForm from '../components/user/LoginForm';
import {withRouter} from 'react-router-dom';
import {check} from '../modules/userStataus';

const LoginContainer = ({history}) => {
    const dispatch = useDispatch();
    const {form, user, userError, userstatus} = useSelector(({ user, userstatus }) => ({
        form: user.login,
        user: user.user,
        userError: user.userError,
        userstatus: userstatus.userstatus,
    }));
    const onChange = e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value,
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
        const {username, password} = form;
        dispatch(login({username, password}));
    };

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);

    useEffect(() => {
        if(userError){
            console.log('오류 발생');
            console.log(userError);
            return;
        }
        if(user){
            console.log('로그인 성공');
            console.log('현재 정보', form, user, userError, userstatus);
            dispatch(check());
        }
    }, [user, userError, dispatch]);

    useEffect(() => { //로그인이 진행 되었을 때
        if(userstatus){
            history.push('/');
            try{
                localStorage.setItem('userstatus', JSON.stringify(userstatus)); //로그인 상태 유지
            } catch(e){
                console.log('localStorage is not working');
            }
        }
    }, [userstatus, history]);

    return (
        <LoginForm
            type = 'login'
            form = {form}
            onChange = {onChange}
            onSubmit = {onSubmit}
        />
    );
}

export default withRouter(LoginContainer);