import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const UserTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: lightgrey;
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    
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
    width: 360px;
    padding: 2rem;
    box-shadow: 0 0 8px rgba(0,0,0,0.25);
    border-radius: 2px;
    background: white;
`;

const UserTemplate = ({children}) => {
    return (
        <UserTemplateBlock>
            <InnerSpace>
                <div className = "logo-area">
                    LifeHelper
                </div>
                {children}
            </InnerSpace>
        </UserTemplateBlock>
        );
}
export default UserTemplate;