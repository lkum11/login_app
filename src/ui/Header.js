import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 350px;
    margin-top: 48px;
    margin-bottom: 24px;
`;

const HeaderStyle = styled.div`
    font-size: 22px;
    line-height: 28px;
    color: #000000;
    flex:1;
    text-align: center
`;
const Header = props => {
    return (
        <InputContainer>
            <FontAwesomeIcon 
                icon={faAngleLeft} 
                className="icon" 
                color="#0696d7"
            />
            <HeaderStyle >{props.headerTitle}</HeaderStyle>
        </InputContainer>
    )
}
export default Header;