import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { session } from '../../actions'
import Login from '../../components/PageComponents/Login';
import { auth } from '../../components/MaterialComponents';
import { loginApi } from './constants';
import { consoleError } from '../../utils'
import to from 'await-to-js';
import { withFirebase } from '../../components/firebase'

class LoginContainer extends React.Component {
    state = {
        email: '',
        password:''
    };
    handleTextFields = (textFieldObj) => {
        const fields = this.state;
        fields[textFieldObj.target.id] = textFieldObj.target.value;
        this.setState({fields})
    }
    login = async () => {
        const {
            email,
            password
        } = this.state;
        const isValid = email != '' && password != '';
        if(isValid){
            const [err, response] = await to(axios.get(loginApi,{
                headers: {
                    email: this.state.email,
                    password: this.state.password
                }
            }));
            consoleError(err);
            console.log(response.data);
            localStorage.setItem('token',JSON.stringify(response.data.token));
            localStorage.setItem('email',JSON.stringify(response.data.email));
            auth.authenticate();
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
        }
    }
    render() {
        return (
            <div>
                <Login 
                handleTextFieldFunc={this.handleTextFields}
                emailValue={this.state.email}
                passwordValue={this.state.password}
                loginFunc={this.login}
                />
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     login: (user) => dispatch(session(user));
// }

export default withFirebase(LoginContainer);