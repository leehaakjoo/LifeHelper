import React from 'react';
import UserInfo from '../components/user/UserInfo';
import {useSelector} from 'react-redux';

const UserInfoContainer =() => {

    const {userstatus} = useSelector(({userstatus}) => ({userstatus: userstatus.userstatus}));
    console.log(userstatus);
    return(
        <UserInfo/>
    );
}

export default UserInfoContainer;