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
        password2: ''
    };
    handleTextFields = (textFieldObj) => {
        const fields = this.state;
        fields[textFieldObj.target.id] = textFieldObj.target.value;
        this.setState({fields})
    }
    register = () => {
        const {
            name,
            email,
            password1,
            password2,
        } = this.state;
        const isValid = name !== '' && email !== '' 
                        && password1 === password2;
        if(isValid)
        {
            axios.post(registerApi,{
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
    render() {
        return (
            <div>
                <Register 
                handleTextFieldFunc={this.handleTextFields}
                nameValue={this.state.name}
                emailValue={this.state.email}
                password1Value={this.state.password1}
                password2Value={this.state.password2}
                loginFunc={this.login}
                />
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     login: (user) => dispatch(session(user));
// }

export default withFirebase(RegisterContainer);