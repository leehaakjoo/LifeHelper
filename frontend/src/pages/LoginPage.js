import React from 'react';
import UserTemplate from '../components/user/UserTemplate';
import LoginContainer from '../containers/LoginContainer';
import Header from '../components/Header';
const LoginPage = () => {
    return(
        <>
            <Header/>
            <UserTemplate>
                <LoginContainer/>
            </UserTemplate>
        </>
        );
}
export default LoginPage;