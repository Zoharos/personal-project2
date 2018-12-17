import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import AppBar from '../../InPageComponents/AppBar';
import { siteTitle } from '../../../constants';

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

const Home = (props) => {
    const { classes } = props;
    return (
        <div>
          <Helmet>
            <title>{siteTitle}</title>
          </Helmet>
          <AppBar />
          {/* <DarkScreen /> */}
        </div>
    );
}

export default withStyles(styles)(Home);


//------------------description------------------
//props.handleTextField - change the states of the text field values in index.
//props.emailValue - the state of email in index
//props.emailValue - the state of password in index