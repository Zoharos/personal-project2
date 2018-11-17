import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'real-nadlan.eu.auth0.com',
    clientID: '6YFeEI237Mf5B6jaHW8Z0ZNt6HvQDUT8',
    redirectUri: 'http://localhost:8080',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}