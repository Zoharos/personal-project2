import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { blackLogo } from '../../../imports';
import { rootRoute, loginRoute } from '../../../constants';
import { passwordLabel, emailLabel, pageTitle, signUpLabel, subHeadLabel, logInlabel } from './constants'

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

const Register = (props) => {
    const { 
      classes,
      nameValue,
      emailValue,
      password1Value,
      password2Value
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
          <div className={classes.textFieldsDecor}>
            <form className={classes.ltrTextField} onChange={props.handleTextFieldFunc}>
              <TextField id="name" value={nameValue} label="Your name"></TextField>
              <TextField id="email" value={emailValue} label={emailLabel}></TextField>
              <TextField id="password1" value={password1Value} label={passwordLabel} type='password'></TextField>
              <TextField id="password2" value={password2Value} label="Re-enter password" type='password'></TextField>
            </form>
            <Button color="secondary" variant="contained" onClick={props.loginFunc}>{signUpLabel}</Button>
          </div>
        </div>
    );
}

export default withStyles(styles)(Register);


//------------------description------------------
//props.handleTextField - change the states of the text field values in index.
//props.emailValue - the state of email in index
//props.emailValue - the state of password in index