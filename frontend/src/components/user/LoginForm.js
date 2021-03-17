import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const LoginFormBlock = styled.div`
    h3{
        margin: 0;
        margin-bottom: 1rem;
        text-align: center;
    }
    button{
        width:100%;
        margin-top: 1rem;
        height: 50px;
        
    }
    
`;

const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: none;
    padding-bottom: 0.5rem;
    width: 100%;
    border-bottom: 1px solid grey;
    margin-bottom: 1rem;
`;
const AnotherLink = styled.div`
    margin-top: 2rem;
    text-align : right;
    a{
        text-decoration: underline;
    }
`;
const LoginForm = () => {
    return(
            <LoginFormBlock>
                <h3>로그인</h3>
                <form>
                    <StyledInput autoComplete = "username"
                        name = "username"
                        placeholder = "아이디"
                    />
                    <StyledInput autoComplete = "new-password"
                        name = "password"
                        placeholder = "비밀번호"
                        type = "password"
                    />
                    <br/>
                    <button>로그인</button>
                </form>
                <AnotherLink>
                    <Link to = '/register'>회원가입</Link>
                </AnotherLink>
            </LoginFormBlock>
    );
}
export default LoginForm;