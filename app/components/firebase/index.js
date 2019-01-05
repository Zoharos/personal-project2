import React from 'react';
import {FirebaseConsumer, FirebaseProvider} from './context';
import Firebase from './firebase';

export const withFirebase = Component => props => (
    <FirebaseConsumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseConsumer>
);

export { FirebaseProvider, FirebaseConsumer  };
export default Firebase;
