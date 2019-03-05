import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { rootRoute, loginRoute } from '../../../constants';
import { blackLogo } from '../../../imports';
import {
  pageTitle,
  headline,
  submitLabel,
  emailLabel,
  backLabel
} from './constants';

const styles = theme => ({
  logoPadding: {
    paddingLeft: '3%',
    paddingTop: '2%',
    width: '10%',
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
    margin: 'auto',
    textAlign: 'center',
    '& Button': {
      marginBottom: 10,
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
    '& div': {
      width: 'inherit',
      marginBottom: 10,
    }
  },
});

const ForgotPassword = (props) => {
    const { classes, isEmailInvalid } = props;
    return (
        <div>
          <Helmet>
            <title>{pageTitle}</title>
          </Helmet>
          <Link to={rootRoute}><img className={classes.logoPadding} src={blackLogo}/></Link>
          <h1 className={classes.headline}>{headline}</h1>
          <div className={classes.textFieldsDecor}>
            <form onChange={props.handleTextFieldFunc} className={classes.ltrTextField}>
              <TextField error={isEmailInvalid} id="email" value={props.emailValue} label={emailLabel}></TextField>
            </form>
            <Button color="secondary" variant="contained" onClick={props.getPasswordFunc}>{submitLabel}</Button>
            <Link className={classes.links} to={loginRoute}>{backLabel}</Link>
          </div>
        </div>
    );
}

export default withStyles(styles)(ForgotPassword);

//------------------description------------------
//props.handleTextField - change the states of the text field values in index.
//props.emailValue - the state of email in index
//props.emailValue - the state of password in index