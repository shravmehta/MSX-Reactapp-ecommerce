import React from 'react';
import FormInput from '../form-input/form-input';
import CustomButtom from '../custom-button/custom-button';
import './sign-up.scss';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';


class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("password don't match!!");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(err) {
            console.log(err);      
        }
    };

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name] : value});
    } 

    render(){
        return (
            <div className = "sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className= "sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput type = 'text' name = 'displayName' value={this.state.displayName} label ='Display Name' onChange = {this.handleChange} required />
                    <FormInput type = 'email' name = 'email' value={this.state.email} label ='Email' onChange = {this.handleChange} required />
                    <FormInput type = 'password' name = 'password' value={this.state.password} label ='Password' onChange = {this.handleChange} required />
                    <FormInput type = 'password' name = 'confirmPassword' value={this.state.confirmPassword} label ='Confirm Password' onChange = {this.handleChange} required />

                    <CustomButtom type="submit">SIGN UP</CustomButtom>   
                </form>
            </div>
        );
    }
}

export default SignUp;