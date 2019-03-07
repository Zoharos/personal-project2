import React from 'react';
import * as R from 'ramda';
import Register from '../../components/PageComponents/Register';
import to from 'await-to-js';
import { withFirebase } from '../../components/firebase'

class RegisterContainer extends React.Component {
    state = {
        name: '',
        email: '',
        password1: '',
        password2: '',
        isNameInvalid: false,
        isEmailInvalid: false, 
        isPassword1Invalid: false,
        isPassword2Invalid: false,
        isPasswordsInvalid: false,
        isSnackbarOpen: false,
        isSuccessSnackbarOpen: false,
        errorMessage: '',
        started: false,
        user: {},
    };
    handleTextFields = (textFieldObj) => {
        const fields = this.state;
        fields[textFieldObj.target.id] = textFieldObj.target.value;
        this.setState({fields})
    }
    
    handleCloseErrorSnackbar = () => this.setState({isSnackbarOpen: false});

    handleCloseSuccessSnackbar = () => this.setState({isSuccessSnackbarOpen: false});

    handleError = (error) => {
        R.includes("email",error.message) ? 
        this.setState({errorMessage: error.message, isSnackbarOpen: true, isNameInvalid: false, isEmailInvalid: true, isPassword1Invalid: false, isPassword2Invalid: false, isPasswordsInvalid: false, started: false}) : 
        this.setState({errorMessage: error.message, isSnackbarOpen: true, isNameInvalid: false, isPasswordsInvalid: true, isEmailInvalid: false, started: false})
        console.log("error: " + error);
    }
    
    verifyUser = () => {
        this.props.firebase.sendEmailVerification();
        this.setState({
            isNameInvalid: false,
            isEmailInvalid: false,
            isPassword1Invalid: false,
            isPassword2Invalid: false,
            isPasswordsInvalid: false,
            isSnackbarOpen: false,
            isSuccessSnackbarOpen: true,
            started: false
        });
    }

    updateName = async (name) => {
        const [error, user] = await to(this.props.firebase.updateUser(name));
        error ? console.log(error) : this.verifyUser();
    }

    signUp = async (email, password, name) => {
        this.setState({started: true})
        const [error, user] = await to(this.props.firebase.signUp(email,password));
        error ? this.handleError(error) : this.updateName(name); //this.setState({user});
    }

    validateTextFields = async () => {
        const {
            name,
            email,
            password1,
            password2,
        } = this.state;
        const isNameInvalid = name === '';
        const isEmailInvalid = email === ''; 
        const isPasswordsInvalid = password1 !== password2;
        const isPassword1Invalid = password1 === '';
        const isPassword2Invalid = password2 === '';
        const isInvalid = isNameInvalid || isEmailInvalid || isPassword1Invalid || isPassword2Invalid || isPasswordsInvalid;
        const errorMessage = isNameInvalid ? "Please enter your name" : isEmailInvalid ? "Please enter your email" :
                             isPassword1Invalid ? "Please enter password" : isPassword2Invalid ? "Please enter password" :
                              "Those passwords didn't match. Please Try again."
        !isInvalid ? this.signUp(email, password1, name) : this.setState({
                                                            isNameInvalid,
                                                            isEmailInvalid,
                                                            isPassword1Invalid,
                                                            isPassword2Invalid,
                                                            isPasswordsInvalid,
                                                            errorMessage,
                                                            isSnackbarOpen: true
                                                            })
    }
    render() {
        return (
            <div>
                <Register 
                handleTextFieldFunc={this.handleTextFields}
                nameValue={this.state.name}
                emailValue={this.state.email}
                password1Value={this.state.password1}
                password2Value={this.state.password2}
                registerFunc={this.validateTextFields}
                isNameInvalid={this.state.isNameInvalid}
                isEmailInvalid={this.state.isEmailInvalid}
                isPassword1Invalid={this.state.isPassword1Invalid}
                isPassword2Invalid={this.state.isPassword2Invalid}
                isPasswordsInvalid={this.state.isPasswordsInvalid}
                isSnackbarOpen={this.state.isSnackbarOpen}
                isSuccessSnackbarOpen={this.state.isSuccessSnackbarOpen}
                closeErrorSnackbar={this.handleCloseErrorSnackbar}
                closeSuccessSnackbar={this.handleCloseSuccessSnackbar}
                errorMessage={this.state.errorMessage}
                started={this.state.started}
                />
            </div>
        )
    }
}

export default withFirebase(RegisterContainer);