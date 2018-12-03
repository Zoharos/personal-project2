import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as constants from './constants';

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
      paddingLeft: '41%',
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

const Login = (props) => {
    const { classes } = props;
    return (
        <div>
          <Helmet>
            <title>CoBuy | Login</title>
          </Helmet>
          <a href={constants.linkToPublicWebsite}><img className={classes.logoPadding} src="/statics/blackLogo.png"/></a>
          <h1 className={classes.headline}>התחברות</h1>
          <h3 className={classes.headline}>חדשים באתר? &nbsp; 
            <Link className={classes.links} to={constants.linkToRegistration}>הירשמו עכשיו </Link>
          </h3>
          <div className={classes.textFieldsDecor}>
            <form className={classes.textField} onChange={props.handleTextFieldFunc}>
              <TextField id="email" value={props.emailValue} label={constants.userTextFieldLabel}></TextField>
              <TextField id="password" value={props.passwordValue} label={constants.passwordTextFieldLabel} type='password'></TextField>
            </form>
            <Button color="primary" variant="contained" onClick={props.loginFunc}>התחבר</Button>
            <Link className={classes.links} to={constants.linkToForgotPassword}>שכחתי סיסמה</Link>
          </div>
        </div>
    );
}

export default withStyles(styles)(Login);


//------------------description------------------
//props.handleTextField - change the states of the text field values in index.
//props.emailValue - the state of email in index
//props.emailValue - the state of password in index