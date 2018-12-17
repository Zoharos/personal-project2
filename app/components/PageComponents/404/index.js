import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import Pacman from '../../InPageComponents/Pacman'
import { pageTitle } from './constants';

const NotFound = (props) => {
    const { classes } = props;
    return (
        <div>
          <Helmet>
            <title>{pageTitle}</title>
          </Helmet>
          <Pacman />
        </div>
    );
}

export default NotFound;