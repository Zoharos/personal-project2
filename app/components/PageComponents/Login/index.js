import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { blackLogo } from '../../../imports';
import { rootRoute, registerRoute, forgotPasswordRoute } from '../../../constants';
import { passwordLabel, emailLabel, pageTitle, signinLabel, subHeadLabel, createAccountlabel, forgotLabel } from './constants'

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
});

const Login = (props) => {
    const { classes } = props;
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
              <TextField id="email" value={props.emailValue} label={emailLabel}></TextField>
              <TextField id="password" value={props.passwordValue} label={passwordLabel} type='password'></TextField>
            </form>
            <Button color="secondary" variant="contained" onClick={props.loginFunc}>{signinLabel}</Button>
            <Link className={classes.links} to={forgotPasswordRoute}>{forgotLabel}</Link>
          </div>
        </div>
    );
}

export default withStyles(styles)(Login);


//------------------description------------------
//props.handleTextField - change the states of the text field values in index.
//props.emailValue - the state of email in index
//props.emailValue - the state of password in index