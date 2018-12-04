import React from 'react';
import axios from 'axios';
import Login from '../../components/PageComponents/Login';
import { auth } from '../../components/MaterialComponents';
import { loginApi } from './constants';

class LoginPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        registrationFields: {
            regFirstName: '',
            regLastName: '',
            regEmail1: '',
            regEmail2: '',
            regPassword1: '',
            regPassword2: ''
        },
        loginFields: {
            email: '',
            password:''
        }
      };
    }
    handleTextFields = (textFieldObj) => {
        const loginFields = this.state.loginFields;
        loginFields[textFieldObj.target.id] = textFieldObj.target.value;
        this.setState({loginFields})
    }
    register = () => {
        if((this.state.registrationFields.regEmail1 == this.state.registrationFields.regEmail2) || (this.state.registrationFields.regPassword1 == this.state.registrationFields.regPassword2))
        {
            axios.post('/api/login',{
                    /* firstName: this.state.registrationFields.regFirstName,
                    lastName: this.state.registrationFields.regLastName,
                    email1: this.state.registrationFields.regEmail1,
                    email2: this.state.registrationFields.regEmail2,
                    password1: this.state.registrationFields.regPassword1,
                    password2: this.state.registrationFields.regPassword2, */
                    //token: JSON.parse(localStorage.getItem('token'))
                })
                .then(function (response) {
                    console.log(response);
            }) 
        }
    }
    login = () => {
        axios.get(loginApi,{
            headers: {
                email: this.state.loginFields.email,
                password: this.state.loginFields.password
            }
        }).then(function (response){
            console.log(response.data);
            localStorage.setItem('token',JSON.stringify(response.data.token));
            localStorage.setItem('email',JSON.stringify(response.data.email));
            auth.authenticate();
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
        }).catch(function (err){
            console.log(err);
        })
    }
    render() {

        return (
            <Login 
            handleTextFieldFunc={this.handleTextFields}
            emailValue={this.state.loginFields.email}
            passwordValue={this.state.loginFields.password}
            loginFunc={this.login}
            />
        )
    }
  }

export default LoginPage;