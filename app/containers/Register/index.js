import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { session } from '../../actions'
import Register from '../../components/PageComponents/Register';
import { auth } from '../../components/MaterialComponents';
import { registerApi } from './constants';
import { consoleError } from '../../utils'
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
        errorMessage: '',
        user: {},
    };
    handleTextFields = (textFieldObj) => {
        const fields = this.state;
        fields[textFieldObj.target.id] = textFieldObj.target.value;
        this.setState({fields})
    }
    
    handleCloseSnackbar = () => this.setState({isSnackbarOpen: false});

    verifyUser = (user) => {
        this.props.firebase.sendEmailVerification();
        this.setState({user});
    }

    register = async () => {
        const {
            name,
            email,
            password1,
            password2,
        } = this.state;
        const isNameInvalid = name === '';
        const isEmailInvalid = email === ''; 
        const isPasswordsInvalid = password1 !== password2;
        const isPassword1Invalid = password1 === '' || isPasswordsInvalid;
        const isPassword2Invalid = password2 === '' || isPasswordsInvalid;
        const isInvalid = isNameInvalid || isEmailInvalid || isPassword1Invalid || isPassword2Invalid || isPasswordsInvalid;
        if(!isInvalid)
        {
            const [error, user] = await to(this.props.firebase.signUp(email,password1));
            error ? this.setState({errorMessage: error.message, isSnackbarOpen: true}) : this.verifyUser(user); //this.setState({user});
            console.log(user);
        }
        this.setState({
            isNameInvalid,
            isEmailInvalid,
            isPassword1Invalid,
            isPassword2Invalid,
            isPasswordsInvalid
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
                registerFunc={this.register}
                isNameInvalid={this.state.isNameInvalid}
                isEmailInvalid={this.state.isEmailInvalid}
                isPassword1Invalid={this.state.isPassword1Invalid}
                isPassword2Invalid={this.state.isPassword2Invalid}
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

export default withFirebase(RegisterContainer);