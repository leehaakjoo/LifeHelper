import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const RegisterFormBlock = styled.div`
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
    Link{
        text-align: right;
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
const InnerSpace = styled.div`
    .logo-area{
        display: block;
        padding-bottom: 2rem;
        text-align: center;
        letter-spacing: 2px;
        font-size: 2rem;
        font-weight: bolder;
    }
    width: 300px;
    padding: 2rem;
    box-shadow: 0 0 8px rgba(0,0,0,0.025);
    border-radius: 2px;
    background: white;
`;
const AnotherLink = styled.div`
    margin-top: 2rem;
    text-align : right;
    a{
        text-decoration: underline;
    }
`;
const RegisterForm = () => {
    return(
        <RegisterFormBlock>
            <h3>회원가입</h3>
            <InnerSpace>
                <form>
                    <StyledInput
                        name = "username"
                        placeholder="아이디"
                    />
                    <StyledInput
                        name = "password"
                        placeholder="비밀번호"
                    />
                    <StyledInput
                        name = "password-validation"
                        placeholder="비밀번호 확인"
                    />
                    <StyledInput
                        name = "email"
                        placeholder="이메일 ex) hongildong@naver.com"
                    />
                    <StyledInput
                        name = "school"
                        placeholder="학교"
                    />
                    <button>회원가입</button>
                </form>
            </InnerSpace>
            <AnotherLink>
                <Link to ='/login'>로그인</Link>
            </AnotherLink>
        </RegisterFormBlock>
    );
}
export default RegisterForm;