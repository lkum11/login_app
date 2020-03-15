import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items:"center"
`;

const ButtonStyle = styled.div`
    border:1px solid #bbbbbb;
    border-radius: 4px;
    width: 360px;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    background-color: #0696d7;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 12px;
    margin-bottom: 12px;
    text-align: center;
    vertical-align: center;

    &:focus{
        outline: -webkit-focus-ring-color auto 0px;
    }
`;

const CustomButon = props => {
    return (
        <ButtonContainer>
            <ButtonStyle 
                onClick={props.onClick}
            >
                {props.buttonTitle}
                
            </ButtonStyle>
        </ButtonContainer>
        
    )
}

export default CustomButon;