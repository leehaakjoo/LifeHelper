import React from 'react';
import RegisterForm from '../components/user/RegisterForm';
import UserTemplate from '../components/user/UserTemplate';
const registerPage = () => {
    return(
        <UserTemplate>
            <RegisterForm/>
        </UserTemplate>
    );
}
export default registerPage;