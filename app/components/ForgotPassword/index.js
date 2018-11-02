import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RenderForgotPasswordPage from './renderForgotPasswordPage';
import { auth } from '../MaterialComponents';

class ForgotPasswordPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email = '',
      };
    }
    handleTextFields = (textFieldObj) => {
        const email = this.state.email;
        email = textFieldObj.target.value;
        this.setState({email})
    }
    render() {
        return (
            <RenderForgotPasswordPage 
            emailValue={this.state.email}
            handleTextFieldFunc={this.handleTextFields}
            />
        )
    }
  }

export default ForgotPasswordPage;