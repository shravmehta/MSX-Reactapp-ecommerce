import React from 'react';

import {CustomButtonContainer} from './custom-button.styles';

const CustomButton = ({children, isGoogleSignIn, inverted, ...buttonProps}) => (
    <CustomButtonContainer className= {`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...buttonProps}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;