import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import data from '../constants/data';

import CustomInput from '../ui/CustomInput';
import CustomButon from '../ui/CustomButon';
import FooterText from '../ui/FotterText';

const LoginScreenContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 30px;
        padding-right: 30px;
        height: 100%;
`;

const HeaderStyle = styled.div`
    font-size: 22px;
    line-height: 28px;
    color: #000000;
    margin-top: 48px;
    margin-bottom: 8px;
`;

const LoginScreen = props => {

    const history = useHistory();

    const [userName, setUserName] = useState();
    const [error, setError] = useState(true);
    const [buttonName, setButtonName] = useState("Next")

    const onChangeHandler = (event) => {
        setUserName(event.target.value);
        setError(true);
    }

    const onClickHandler = () => {
        setButtonName("Verifying")
        setTimeout(() => {
            if(userName === data.userName){
                setError(true);
                history.push(userName)
            } else {
                setError(false);
                setButtonName("Next")
            }
        }, 1000);
        
    }

    return(
        <LoginScreenContainer>
            <HeaderStyle>Sign in</HeaderStyle>
            <CustomInput 
                title="Username" 
                type-="text"
                error={error}
                errorTxt="The username is not recognized."
                onChange={onChangeHandler}
            />
            <CustomButon buttonTitle={buttonName} onClick={onClickHandler}/>
            <div>
                <label className="greyLabel">New to Auto Desk?</label>
                <Link to="/createuser" className="linkStyle"> Create account</Link>
            </div>
            <FooterText />
        </LoginScreenContainer>
    )
};

export default LoginScreen;