import React from 'react';
import ReactDOM from 'react-dom';
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
const constants = require('./constants');

function styles()  {
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#2196f3',
        },
      },
    });
      const styles = theme => ({
          
      });
      return [styles,theme];
  }

function renderLoginPage(props) {
    const { classes } = props;
    return (
        <div>
          <Helmet>
            <title>Real Nadlan | Forgot Password</title>
          </Helmet>

        </div>
    );
}

export default withStyles(styles()[0])(renderLoginPage);

//------------------description------------------
//props.handleTextField - change the states of the text field values in index.
//props.emailValue - the state of email in index
//props.emailValue - the state of password in index