import React from 'react';
import styled from 'styled-components';

const FotterContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    height: 100%;
    margin-bottom: 12px;
`;

const FotterText = props => {
    return (
        <FotterContainer>
            <label className="NotActivelinkStyle">Learn more</label>
            <label className="greyLabel">Your account for everything Autodesk</label>
        </FotterContainer>
        
    )
}

export default FotterText;