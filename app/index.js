import React from 'react';
import ReactDOM from 'react-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import {BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import staticImports from './imports.js';

const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#2196f3',
       },
    },
});

class Main extends React.Component {
    // Remove the server-side injected CSS.
/*     componentDidMount() {
      const jssStyles = document.getElementById('jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    } */
  
render() {
    return (
        <Router>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </Router>
      )
    }
}

//const generateClassName = createGenerateClassName();

//<JssProvider generateClassName={generateClassName}>
//</JssProvider>
ReactDOM.render(<Main />,document.getElementById('root'));
