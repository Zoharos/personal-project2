import React from 'react';
import { Link } from 'react-router-dom';
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '../AppBar'
import * as constants from './constants';

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

const Home = (props) => {
    const { classes } = props;
    return (
        <div>
          <Helmet>
            <title>CoBuy</title>
          </Helmet>
          <AppBar />
        </div>
    );
}

export default withStyles(styles()[0])(Home);


//------------------description------------------
//props.handleTextField - change the states of the text field values in index.
//props.emailValue - the state of email in index
//props.emailValue - the state of password in index