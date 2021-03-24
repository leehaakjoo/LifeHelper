import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
`;
const Wrapper = styled.div`
    
    padding-left: 1rem;
    padding-right: 1rem;
    width: 1024px;
    margin: 0 auto;
    height: 4rem;
    justify-content: space-between;
    display: flex;
    @media (max-width: 1024px){
        width: 768px;
    }
    @media (max-width: 768px){
        width: 100%;
    }
    .logo{
        font-size: 2rem;
        font-weight: 1000;
        letter-spacing: 2px;
        text-decoration-line: none;
        margin-top: 0.5rem;
    }
    .right{
        display: flex;
        align-items: center;
    }
    .userInfo{
        letter-spacing: 0.5px;
        margin-right: 1rem;
    }
`;

const Spacer = styled.div`
    height: 4rem;
`;
const Header = ({userstatus, onLogout}) => {
    return(
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to ='/' className = "logo">
                        LifeHelper
                    </Link>
                    {userstatus ? (
                        <div className = "right">
                            <div className = "userInfo">
                                <Link to = '/userinfo'>{userstatus.username}</Link>
                            </div>
                                <button onClick = {onLogout}>로그아웃</button>    
                                
                        </div>
                        ) : (
                            <div className = "right">
                                <button to = '/login'>로그인</button>
                            </div>
                        )
                    }
                 </Wrapper>
            </HeaderBlock>
            <Spacer/>
        </>
    );
}
export default Header;