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
                    <App />
                </Provider> 
            </MuiThemeProvider>
        </Router>
    )
}
ReactDOM.render(<Main />,document.getElementById('root'));
