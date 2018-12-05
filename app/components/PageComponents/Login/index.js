import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { blackLogo } from '../../../imports';
import { homeRoute } from '../../../constants';
import { 
  registerRoute,
  forgotPasswordRoute,
  passwordLabel,
  emailLabel,
  pageTitle
} from './constants'

const styles = theme => ({
    logoPadding: {
      paddingLeft: '3%',
      paddingTop: '2%',
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
        margin: 10,
        width: 'inherit'
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
      margin: 10,
      '& div': {
        width: 'inherit',
        marginBottom: 10,
      },
    },
});

const Login = (props) => {
    const { classes } = props;
    return (
        <div>
          <Helmet>
            <title>{pageTitle}</title>
          </Helmet>
          <a href={homeRoute}><img className={classes.logoPadding} src={blackLogo}/></a>
          <h1 className={classes.headline}>Sign in</h1>
          <h4 className={classes.secondaryHeadline}>New to Cobuy? &nbsp; 
            <Link className={classes.links} to={registerRoute}>Create an account</Link>
          </h4>
          <div className={classes.textFieldsDecor}>
            <form className={classes.ltrTextField} onChange={props.handleTextFieldFunc}>
              <TextField id="email" value={props.emailValue} label={emailLabel}></TextField>
              <TextField id="password" value={props.passwordValue} label={passwordLabel} type='password'></TextField>
            </form>
            <Button color="secondary" variant="contained" onClick={props.loginFunc}>Sign in</Button>
            <Link className={classes.links} to={forgotPasswordRoute}>Forgot password</Link>
          </div>
        </div>
    );
}

export default withStyles(styles)(Login);


//------------------description------------------
//props.handleTextField - change the states of the text field values in index.
//props.emailValue - the state of email in index
//props.emailValue - the state of password in index