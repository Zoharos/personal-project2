import fireApp from 'firebase/app';
import 'firebase/auth';
import { API_KEY, AUTH_DOMAIN, DB_URL, MESSAGING_SENDER_ID, PROJECT_ID, STORAGE_BUCKET } from './constants'

const config = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DB_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID
};

class firebase {
    constructor() {
        fireApp.initializeApp(config);
        this.auth = fireApp.auth();
    }

    /*Firebase API*/
    signUp = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

    signIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

    logOut = () => this.auth.signOut();

    passwordReset = email => this.auth.sendPasswordResetEmail(email);

    passwordUpdate = password => this.auth.currentUser.updatePassword(password);

    sendEmailVerification = () => this.auth.currentUser.sendEmailVerification();
};

export default firebase;