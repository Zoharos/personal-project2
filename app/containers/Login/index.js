import React from 'react';
import { Redirect } from 'react-router-dom';
import Login from '../../components/PageComponents/Login';
import to from 'await-to-js';
import { withFirebase } from '../../components/firebase';
import { generalErrorMessage, notVerifiedMessage } from './constants';

class LoginContainer extends React.Component {
    state = {
        email: '',
        password: '',
        isEmailInvalid: false,
        isPasswordInvalid: false,
        isSnackbarOpen: false,
        errorMessage: '',
        started: false
    };

    handleCloseSnackbar = () => this.setState({isSnackbarOpen: false});

    handleRedirect = () => this.props.history.push('/');

    handleTextFields = (textFieldObj) => {
        const fields = this.state;
        fields[textFieldObj.target.id] = textFieldObj.target.value;
        this.setState({fields})
    }

    handleToken = (response) => {
        localStorage.setItem('name',JSON.stringify(response.user.displayName));
        this.setState({
            isEmailInvalid: false,
            isPasswordInvalid: false,
            isSnackbarOpen: false,
            started: false
        })
        console.log(response);
        this.handleRedirect();
    }

    checkEmailVerification = (response) => 
        response.user.emailVerified ? this.handleToken(response) : this.setState({errorMessage: notVerifiedMessage, isSnackbarOpen: true, started: false, isEmailInvalid: false, isPasswordInvalid: false});

    handleError = (error) => {
        this.setState({errorMessage: generalErrorMessage, started: false, isSnackbarOpen: true, isEmailInvalid: false, isPasswordInvalid: false})
        console.log("error: " + error.code);
    }

    signIn = async (email, password) => {
        this.setState({started: true});
        const [error, response] = await to(this.props.firebase.signIn(email, password));
        error ? this.handleError(error) : this.checkEmailVerification(response);
    }

    validateTextFields = async () => {
        const {email, password} = this.state;
        const isEmailInvalid = email === '';
        const isPasswordInvalid = password === ''; 
        const isInvalid = isEmailInvalid || isPasswordInvalid;
        const errorMessage = isEmailInvalid ? "Please enter your email" : "Please enter your password"
        !isInvalid ? this.signIn(email, password) : this.setState({
                                                    isEmailInvalid, 
                                                    isPasswordInvalid,
                                                    errorMessage,
                                                    isSnackbarOpen: true
                                                    })
    }

    render() {
        return (
            <div>
                <Login 
                handleTextFieldFunc={this.handleTextFields}
                emailValue={this.state.email}
                passwordValue={this.state.password}
                loginFunc={this.validateTextFields}
                isEmailInvalid={this.state.isEmailInvalid}
                isPasswordInvalid={this.state.isPasswordInvalid}
                isSnackbarOpen={this.state.isSnackbarOpen}
                errorMessage={this.state.errorMessage}
                onClose={this.handleCloseSnackbar}
                started={this.state.started}
                />
            </div>
        )
    }
}

export default withFirebase(LoginContainer);