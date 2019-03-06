import React from 'react';
import axios from 'axios';
import * as R from 'ramda';
import { connect } from 'react-redux';
import { session } from '../../actions';
import Login from '../../components/PageComponents/Login';
import { auth } from '../../components/MaterialComponents';
import to from 'await-to-js';
import { withFirebase } from '../../components/firebase'

class LoginContainer extends React.Component {
    state = {
        email: '',
        password: '',
        isEmailInvalid: false,
        isPasswordInvalid: false,
        isSnackbarOpen: false,
        errorMessage: '',
        user: {},
    };

    handleCloseSnackbar = () => this.setState({isSnackbarOpen: false});

    handleTextFields = (textFieldObj) => {
        const fields = this.state;
        fields[textFieldObj.target.id] = textFieldObj.target.value;
        this.setState({fields})
    }

    handleToken = (response) => {
        // localStorage.setItem('token',JSON.stringify(response.data.token));
        // localStorage.setItem('email',JSON.stringify(response.data.email));
        // auth.authenticate();
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
        localStorage.setItem('name',JSON.stringify(response.user.displayName));
        console.log(response);
    }

    handleError = (error) => {
        R.includes("email",error.message) ? 
        this.setState({errorMessage: error.message, isSnackbarOpen: true, isEmailInvalid: true, isPasswordInvalid: false}) : 
        this.setState({errorMessage: error.message, isSnackbarOpen: true, isPasswordInvalid: true, isEmailInvalid: false})
        console.log("error: " + error);
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
        const errorMessage = isEmailInvalid ? "oops.. enter your email" : "oops.. enter your password"
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
// const mapDispatchToProps = (dispatch) => {
//     login: (user) => dispatch(session(user));
// }

export default withFirebase(LoginContainer);