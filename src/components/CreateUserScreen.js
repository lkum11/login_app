import React, { useReducer } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CustomInput from '../ui/CustomInput';
import CustomButon from '../ui/CustomButon';
import FooterText from '../ui/FotterText';

const CreateUserScreenContainer = styled.div`
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

const NameContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const SET_USER_DETAIL = 'SET_USER_DETAIL';

const userStateReducer = (state, action) => {
    switch(action.type){
        case SET_USER_DETAIL: 
                let userDetail= {
                    ...state.userDetailState,
                    [action.input]:action.value
                }
                return {
                    userDetailState: userDetail
                };
        default:
            return state;
    }
}

const CreateUserScreen = props => { 
    const history = useHistory();

    const [userState, dispatchUserState] = useReducer(userStateReducer, {
        userDetailState : {
                fname: null,
                fnameTouched:false,
                lname: null,
                lnameTouched:false,
                userName: null,
                userNameTouched:false,
                cnfUserName: null,
                cnfUserNameTouched:false,
                password: null,
                pwdTouched: false,
                cnfPassword: null,
                cnfPwdTouched: false
            }
        }
    );

    
    const onChangeHandler = (text,id) => {
        dispatchUserState({
            type: SET_USER_DETAIL,
            input: id,
            value: text === "" ? null : text
        })
    };
    const onFocusHandler = (id) => {
        dispatchUserState({
            type: SET_USER_DETAIL,
            input: id,
            value: true
        })
    };

    const onClickHandler = () => {
        onFocusHandler("fnameTouched");
        onFocusHandler("lnameTouched");
        onFocusHandler("userNameTouched");
        onFocusHandler("cnfUserNameTouched");
        onFocusHandler("pwdTouched");
        onFocusHandler("cnfPwdTouched");

        if(userState.userDetailState.fname !== null
            && userState.userDetailState.lname !== null
            && userState.userDetailState.userName !== null
            && userState.userDetailState.cnfUserName !== null
            && userState.userDetailState.password !== null
            && userState.userDetailState.cnfPassword !== null
        ){
            toast.success("Account created successfully",{
                type: toast.TYPE.INFO,
            });
            setTimeout(() => {
                history.push('/');
            }, 3000);
        }
    }

    return(
        <CreateUserScreenContainer>
            <HeaderStyle>Create account</HeaderStyle>
            <NameContainer>
                <CustomInput 
                    title="First name" 
                    inputtype="small"
                    type="text"
                    errorTxt="Please enter your first name."
                    error={(userState.userDetailState.fname !== null || !userState.userDetailState.fnameTouched) ? true : false}
                    onChange={e => onChangeHandler(e.target.value,"fname")}
                    onfocus={e => onFocusHandler("fnameTouched")}
                />
                <CustomInput 
                    title="Last name" 
                    inputtype="small"
                    type="text"
                    errorTxt="Please enter your last name."
                    error={(userState.userDetailState.lname !== null || !userState.userDetailState.lnameTouched) ? true : false}
                    onChange={e => onChangeHandler(e.target.value,"lname")}
                    onfocus={e => onFocusHandler("lnameTouched")}
                />
            </NameContainer>
            <CustomInput 
                title="Username" 
                type="text"
                errorTxt="Please enter a valid username."
                error={(userState.userDetailState.userName !== null || !userState.userDetailState.userNameTouched) ? true : false}
                onChange={e => onChangeHandler(e.target.value,"userName")}
                onfocus={e => onFocusHandler("userNameTouched")}
            />
            <CustomInput 
                title="Re-type username" 
                type="text"
                errorTxt="Please enter a same username."
                error={(userState.userDetailState.cnfUserName === userState.userDetailState.userName || !userState.userDetailState.cnfUserNameTouched) ? true : false}
                onChange={e => onChangeHandler(e.target.value,"cnfUserName")}
                onfocus={e => onFocusHandler("cnfUserNameTouched")}
            />
            <CustomInput 
                title="Password" 
                type="password"
                errorTxt="Please enter password."
                error={(userState.userDetailState.password !== null || !userState.userDetailState.pwdTouched) ? true : false}
                onChange={e => onChangeHandler(e.target.value,"password")}
                onfocus={e => onFocusHandler("pwdTouched")}
            />
            <CustomInput 
                title="Re-type password" 
                type="password"
                errorTxt="Please confirm password."
                error={((userState.userDetailState.cnfPassword === userState.userDetailState.password) || !userState.userDetailState.cnfPwdTouched) ? true : false}
                onChange={e => onChangeHandler(e.target.value,"cnfPassword")}
                onfocus={e => onFocusHandler("cnfPwdTouched")}
            />
            <CustomButon buttonTitle="Create account" onClick={onClickHandler}/>
            <div style={{marginBottom: "32px"}}>
                <label className="greyLabel">Already have an account?</label>
                <Link to="/" className="linkStyle"> Sign in</Link>
            </div>
            <FooterText />
            <ToastContainer autoClose={2000} />
        </CreateUserScreenContainer>
    )
};
export default CreateUserScreen;