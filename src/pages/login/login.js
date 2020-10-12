import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import { SignInAndSignUpContainer } from './login.styles';

const Login = () =>(
    <SignInAndSignUpContainer>
   <SignIn/>
   <SignUp/>
    </SignInAndSignUpContainer>

);

export default Login;