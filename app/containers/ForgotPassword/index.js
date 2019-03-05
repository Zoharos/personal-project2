import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ForgotPassword from '../../components/PageComponents/ForgotPassword';
import { auth } from '../../components/MaterialComponents';
import { forgotApi } from './constants';

class ForgotPasswordContainer extends React.Component {
    state = {
        email: '',
        isEmailInvalid: false,
    };
    handleTextFields = (textFieldObj) => {
        this.setState({email: textFieldObj.target.value})
    }
    getPassword = () => {
        const { email } = this.state;
        const isEmailInvalid = email === '';
        if(!isEmailInvalid)
        {
            axios.get(forgotApi,{
                params: {
                    email: this.state.loginFields.email
                }
            }).then(function (response){
                console.log(response.data);
            }).catch(function (err){
                console.log(err);
            })
        }
        this.setState({isEmailInvalid})
    }
    render() {
        return (
            <ForgotPassword 
            emailValue={this.state.email}
            handleTextFieldFunc={this.handleTextFields}
            getPasswordFunc={this.getPassword}
            isEmailInvalid={this.state.isEmailInvalid}
            />
        )
    }
  }

export default ForgotPasswordContainer;