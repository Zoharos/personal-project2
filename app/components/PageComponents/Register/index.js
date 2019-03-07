import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarWrapper from '../../InPageComponents/SnackbarWrapper';
import { Helmet } from 'react-helmet';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { blackLogo } from '../../../imports';
import { rootRoute, loginRoute } from '../../../constants';
import { passwordLabel, emailLabel, pageTitle, signUpLabel, subHeadLabel, logInlabel, snackbarSuccessMessage, snackbarErrorMessage } from './constants'

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
      textAlign: 'center',
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

const Register = (props) => {
    const { 
      classes,
      nameValue,
      emailValue,
      password1Value,
      password2Value,
      isNameInvalid,
      isEmailInvalid, 
      isPassword1Invalid,
      isPassword2Invalid,
      isPasswordsInvalid,
      isSnackbarOpen,
      errorMessage,
      started,
      isSuccessSnackbarOpen,
      closeErrorSnackbar,
      closeSuccessSnackbar
    } = props;
    return (
        <div>
          <Helmet>
            <title>{pageTitle}</title>
          </Helmet>
          <Link to={rootRoute}><img className={classes.logo} src={blackLogo}/></Link>
          <h1 className={classes.headline}>{signUpLabel}</h1>
          <h4 className={classes.secondaryHeadline}>{subHeadLabel} &nbsp; 
            <Link className={classes.links} to={loginRoute}>{logInlabel}</Link>
          </h4>
          <Snackbar autoHideDuration={9000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={isSnackbarOpen} onClose={closeErrorSnackbar}>
            <SnackbarWrapper variant="error" className={classes.snack} message={snackbarErrorMessage} />
          </Snackbar>
          <Snackbar autoHideDuration={9000} anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={isSuccessSnackbarOpen} onClose={closeSuccessSnackbar}>
            <SnackbarWrapper variant="success" className={classes.snack} message={snackbarSuccessMessage + emailValue} />
          </Snackbar>
          <div className={classes.textFieldsDecor}>
            <form className={classes.ltrTextField} onChange={props.handleTextFieldFunc}>
              <TextField error={isNameInvalid} id="name" value={nameValue} label="Your name" />
              <h4 className={isNameInvalid ? classes.textFieldError : classes.hide}>{errorMessage}</h4>
              <TextField error={isEmailInvalid} id="email" value={emailValue} label={emailLabel} />
              <h4 className={!isNameInvalid && isEmailInvalid ? classes.textFieldError : classes.hide}>{errorMessage}</h4>
              <TextField error={isPassword1Invalid || isPasswordsInvalid} id="password1" value={password1Value} label={passwordLabel} type='password' />
              <h4 className={(!isNameInvalid && !isEmailInvalid) && (isPassword1Invalid || isPasswordsInvalid) ? classes.textFieldError : classes.hide}>{errorMessage}</h4>
              <TextField error={isPassword2Invalid || isPasswordsInvalid} id="password2" value={password2Value} label="Re-enter password" type='password' />
              <h4 className={(!isNameInvalid && !isEmailInvalid) && (isPassword2Invalid || isPasswordsInvalid) ? classes.textFieldError : classes.hide}>{errorMessage}</h4>
            </form>
            <Button disabled={started} color="secondary" variant="contained" onClick={props.registerFunc}>{signUpLabel}</Button>
            {started && <CircularProgress size={24} />}
          </div>
        </div>
    );
}

export default withStyles(styles)(Register);


//------------------description------------------
//props.handleTextField - change the states of the text field values in index.
//props.emailValue - the state of email in index
//props.emailValue - the state of password in index