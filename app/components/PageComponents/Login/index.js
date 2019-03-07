import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarWrapper from '../../InPageComponents/SnackbarWrapper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { blackLogo } from '../../../imports';
import { rootRoute, registerRoute, forgotPasswordRoute } from '../../../constants';
import { passwordLabel, emailLabel, pageTitle, signinLabel, subHeadLabel, createAccountlabel, forgotLabel, snackbarErrorMessage } from './constants'

const styles = theme => ({
    logo: {
      paddingLeft: '3%',
      paddingTop: '2%',
      width: '10%',
    },
    headline: {
      textAlign: 'center',
      fontWeight: 500,
      margin: 'auto',
    },
    secondaryHeadline: {
      textAlign: 'center',
      fontWeight: 500,
    },
    links: {
      textDecoration: 'none',
      color: 'dodgerblue',
    },
    textFieldsDecor: {
      width: 300,
      margin: 'auto',
      textAlign: 'center',
      '& Button': {
        marginBottom: 10,
        width: 'inherit',
      },
    },
    rtlTextField: {
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
    ltrTextField: {
      width: 'inherit',
      '& div': {
        width: 'inherit',
        marginBottom: 10,
      },
    },
    snack: {
      width: 260,
      margin: 'auto',
      textAlign: 'center'
    },
    textFieldError: {
      margin: 0,
      textAlign: 'left',
      color: 'red',
      font: 'unset',
      marginBottom: 10
    },
    hide: {
      display: 'none'
    }
});

const Login = (props) => {
    const { 
      classes, 
      emailValue, 
      passwordValue, 
      isEmailInvalid, 
      isPasswordInvalid,
      isSnackbarOpen,
      onClose,
      errorMessage
    } = props;
    return (
        <div>
          <Helmet>
            <title>{pageTitle}</title>
          </Helmet>
          <Link to={rootRoute}><img className={classes.logo} src={blackLogo}/></Link>
          <h1 className={classes.headline}>{signinLabel}</h1>
          <h4 className={classes.secondaryHeadline}>{subHeadLabel} &nbsp; 
            <Link className={classes.links} to={registerRoute}>{createAccountlabel}</Link>
          </h4>
          <div className={classes.textFieldsDecor}>
            <form className={classes.ltrTextField} onChange={props.handleTextFieldFunc}>
              <TextField error={isEmailInvalid} id="email" value={emailValue} label={emailLabel} />
              <h4 className={isEmailInvalid ? classes.textFieldError : classes.hide}>{errorMessage}</h4>
              <TextField error={isPasswordInvalid} id="password" value={passwordValue} label={passwordLabel} type='password' />
              <h4 className={!isEmailInvalid && isPasswordInvalid ? classes.textFieldError : classes.hide}>{errorMessage}</h4>
            </form>
            <Button color="secondary" variant="contained" onClick={props.loginFunc}>{signinLabel}</Button>
            <Link className={classes.links} to={forgotPasswordRoute}>{forgotLabel}</Link>
          </div>
          <Snackbar autoHideDuration={7000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={isSnackbarOpen} onClose={onClose}>
            <SnackbarWrapper variant="error" className={classes.snack} message={!isEmailInvalid && !isPasswordInvalid ? errorMessage : snackbarErrorMessage} />
          </Snackbar>
        </div>
    );
}

export default withStyles(styles)(Login);


//------------------description------------------
//props.handleTextField - change the states of the text field values in index.
//props.emailValue - the state of email in index
//props.emailValue - the state of password in index