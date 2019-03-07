import React from 'react';
import Home from '../../components/PageComponents/Home';
import to from 'await-to-js';
import { withFirebase } from '../../components/firebase';

class HomeContainer extends React.Component {
    state = {
        user: this.props.firebase.getUser()
    };

    render() {
        const {user} = this.state;
        console.log(user);
        return (
            <div>
                <Home 
                displayName={user ? user.displayName : ''}
                />
            </div>
        )
    }
}

export default withFirebase(HomeContainer);