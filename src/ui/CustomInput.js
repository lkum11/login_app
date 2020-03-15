import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    margin-left:2px;
    margin-right:2px;
`;

const LabelStyle = styled.label`
    line-height: 22px;
    font-size: 16px;
    color: #3c3c33;
    margin-bottom: 8px;
    margin-top:16px;
`;

const CustomInput = props => {
    return (
        <InputContainer>
            <LabelStyle>{props.title}</LabelStyle>
            {props.inputtype !== "small"
                ?<input 
                    type={props.type}
                    className={props.error? "inputStyle": "errorInputStyle"}
                    onChange={props.onChange}
                    onFocus={props.onfocus}
                />
                : <input 
                    type={props.type}
                    className={props.error? "inputSmallStyle": "errorInputSmallStyle"}
                    onChange={props.onChange}
                    onFocus={props.onfocus}
                />
            }
            {}
            {!props.error && <label className={props.inputtype !== "small" ? "errorText": "errorSmallText"}>{props.errorTxt}</label>}
        </InputContainer>
    )
}
export default CustomInput;