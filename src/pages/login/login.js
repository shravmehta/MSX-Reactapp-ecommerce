import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';


import './login.scss';

const Login = () =>(
    <div className="login-page">
   <SignIn/>
   <SignUp/>
    </div>

);

export default Login;