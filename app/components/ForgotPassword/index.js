import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RenderForgotPasswordPage from './renderForgotPasswordPage';
import { auth } from '../MaterialComponents';

class ForgotPasswordPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
      };
    }
    handleTextFields = (textFieldObj) => {
        this.setState({email: textFieldObj.target.value})
    }
    getPassword = () => {
        axios.get('/api/forgotPassword',{
            params: {
                email: this.state.loginFields.email
            }
        }).then(function (response){
            console.log(response.data);
        }).catch(function (err){
            console.log(err);
        })
    }
    render() {
        return (
            <RenderForgotPasswordPage 
            emailValue={this.state.email}
            handleTextFieldFunc={this.handleTextFields}
            getPasswordFunc={this.getPassword}
            />
        )
    }
  }

export default ForgotPasswordPage;