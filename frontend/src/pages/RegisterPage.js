import React from 'react';
import RegisterForm from '../components/user/RegisterForm';
import UserTemplate from '../components/user/UserTemplate';
import RegisterContainer from '../containers/RegisterContainer';
const registerPage = () => {
    return(
        <UserTemplate>
            <RegisterContainer/>
        </UserTemplate>
    );
}
export default registerPage;