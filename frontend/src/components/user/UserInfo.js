import React, { useEffect } from 'react';
import styled from 'styled-components';
import {Helmet} from 'react-helmet-async';

const UserInfoBlock = styled.div`
    
`;
const UserInfo = ({read, error, loading}) => {
    if(error){
        return <UserInfoBlock>에러가 발생했습니다.</UserInfoBlock>
    }
    if(loading || !read){
        return null;
    }
    const {username, phoneNumber, email, school} = read;
    return(
        <UserInfoBlock>
            <div className = "userinfo">
                <h3>아이디: {username}</h3>
                <h3>전화번호: {phoneNumber}</h3>
                <h3>이메일: {email}</h3>
                <h3>학교: {school}</h3>
            </div>
        </UserInfoBlock>
    );
}
export default UserInfo;