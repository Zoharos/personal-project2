import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
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
        logoPadding: {
          paddingLeft: '3%',
          paddingTop: '2%',
        },
        headline: {
          textAlign: 'center',
          fontWeight: 500,
        },
        links: {
          textDecoration: 'none',
          color: 'dodgerblue',
        },
        textFieldsDecor: {
          width: 300,
          paddingLeft: '38%',
          paddingTop: '1%',
          '& Button': {
            margin: 10,
          }
        },
        textField: {
          width: 'inherit',
          margin: 10,
          direction: 'rtl',
          '& div': {
            width: 'inherit',
            marginBottom: 10,
          },
          '& label': {
            right: 0,
            left: 'auto',
            transformOrigin: 'top right;',
          }
        },
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
          <a href={constants.linkToPublicWebsite}><img className={classes.logoPadding} src="/statics/RealNadlanNavBlack.png"/></a>
          <h1 className={classes.headline}>{constants.findAccountString}</h1>
          <div className={classes.textFieldsDecor}>
            <form className={classes.textField} onChange={props.handleTextFieldFunc}>
              <TextField id="email" value={props.emailValue} label={constants.emailTextFieldString}></TextField>
            </form>
            <Button color="primary" variant="contained">{constants.submitButtonString}</Button>
            <Link className={classes.links} to={constants.linkToLogin}>{constants.cancelButtonString}</Link>
          </div>
        </div>
    );
}

export default withStyles(styles()[0])(renderLoginPage);

//------------------description------------------
//props.handleTextField - change the states of the text field values in index.
//props.emailValue - the state of email in index
//props.emailValue - the state of password in index