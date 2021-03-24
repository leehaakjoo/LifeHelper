import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Header from '../components/Header';
import {logout} from '../modules/userStataus';

const HeaderContainer = () => {
    const {userstatus} = useSelector(({userstatus}) => ({userstatus: userstatus.userstatus}));
    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(logout());
    }
    return <Header userstatus = {userstatus} onLogout = {onLogout}/>
};

export default HeaderContainer;