import React from 'react';
import { NavLink } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { logo } from '../../../imports';
import { loginRoute } from '../../../constants';

const styles = theme => ({
  root: {
    width: '100%',
  },
  noUnderline: {
    textDecoration: 'none',
  },
  navLogo: {
    height: 85,
    marginRight: '4%',
  },
  arrowDropDown: {
    float: 'right',
    height: 20,
  },
  bottomNavBar: {
    float: 'right',
    paddingTop: 50,
  },
  bottomNavBarButton: {
    fontSize: '0.800rem',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 2,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 700,
/*       '&:focus': {
        width: 300,
      }, */
    },
  },
});

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <img src={logo} className={classes.navLogo}/>
            <div className={classes.search}>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <Button color="secondary">
                <SearchIcon />
            </Button>
          <div className={classes.bottomNavBar}>
            <div>
              <NavLink to={loginRoute} className={classes.noUnderline}>
                <Button color="secondary" className={classes.bottomNavBarButton}>
                  Hi, sign in
                  <ArrowDropDown className={classes.arrowDropDown}/>
                </Button>
              </NavLink>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(NavBar);