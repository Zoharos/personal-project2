import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import {BrowserRouter as Router } from 'react-router-dom';
import Firebase, { FirebaseProvider } from './components/firebase'
import App from './App';

const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#093170',
       },
       secondary: {
           main: '#ff9800'
       }
    },
});

const Main = () => {
    const store = createStore(reducers);
    return (
        <Router>
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                    <FirebaseProvider value={new Firebase()}>
                        <App />
                    </FirebaseProvider>
                </Provider> 
            </MuiThemeProvider>
        </Router>
    )
};
ReactDOM.render(<Main />,document.getElementById('root'));
