import React from 'react';
import Login from '../../components/PageComponents/Login';
import to from 'await-to-js';
import { withFirebase } from '../../components/firebase'
import { generalErrorMessage } from './constants';

class LoginContainer extends React.Component {
    state = {
        email: '',
        password: '',
        isEmailInvalid: false,
        isPasswordInvalid: false,
        isSnackbarOpen: false,
        errorMessage: ''
    };

    handleCloseSnackbar = () => this.setState({isSnackbarOpen: false});

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
            isSnackbarOpen: false
        })
        console.log(response);
    }

    handleError = (error) => {
        this.setState({errorMessage: generalErrorMessage, isSnackbarOpen: true, isEmailInvalid: false, isPasswordInvalid: false})
        console.log("error: " + error.code);
    }

    signIn = async (email, password) => {
        const [error, response] = await to(this.props.firebase.signIn(email, password));
        error ? this.handleError(error) : this.handleToken(response);
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
                />
            </div>
        )
    }
}

export default withFirebase(LoginContainer);