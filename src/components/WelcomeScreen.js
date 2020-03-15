import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import CustomInput from '../ui/CustomInput';
import CustomButon from '../ui/CustomButon';
import FooterText from '../ui/FotterText';

const WelcomeScreenContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;
        height: 100%;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 350px;
    margin-top: 48px;
    margin-bottom: 24px;
`;
const UserContainer= styled.div`
    flex:1;
    text-align: center
`;

const HeaderStyle = styled.div`
    font-size: 22px;
    line-height: 28px;
    color: #000000;
    flex:1;
    text-align: center
`;

const WelcomeScreen = props => {
    return(
        <WelcomeScreenContainer>
            <InputContainer>
                <Link to="/">
                    <FontAwesomeIcon 
                        icon={faAngleLeft} 
                        className="icon" 
                        color="#0696d7"
                    />
                </Link>
                <UserContainer>
                    <HeaderStyle>Welcome</HeaderStyle>
                    <label className="greyLabel">{props.match.params.username}</label>
                </UserContainer>
            </InputContainer>
            <CustomInput 
                title="Password" 
                type="password"
                error={true}
            />
            <CustomButon buttonTitle="Sign in"/>
            <FooterText />
        </WelcomeScreenContainer>
    )
};

export default WelcomeScreen;