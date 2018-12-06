import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ForgotPassword from '../../components/PageComponents/ForgotPassword';
import { auth } from '../../components/MaterialComponents';
import { forgotApi } from './constants';

class ForgotPasswordContainer extends React.Component {
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
    render() {
        return (
            <ForgotPassword 
            emailValue={this.state.email}
            handleTextFieldFunc={this.handleTextFields}
            getPasswordFunc={this.getPassword}
            />
        )
    }
  }

export default ForgotPasswordContainer;