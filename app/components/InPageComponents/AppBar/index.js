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
import { loginRoute, siteTheme } from '../../../constants';
import { signInButton } from './constants';

const styles = theme => ({
  root: {
    width: '100%',
    zIndex: 1100,
    boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'
  },
  searchNav: {
    width: '65%',
    float: 'left',
    boxShadow: 'none'
  },
  darkScreen: {
    display: 'block',
    width: '100%',
    height: '100%',
    zIndex: 0,
    background: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    left: 0,
    marginTop: 35,
    opacity: 0,
    transition: '0s'
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
    paddingTop: 50,
    width: '35%',
    display: '-webkit-flex',
    backgroundColor: siteTheme.primary,
    height: 35
  },
  bottomNavBarButton: {
    fontSize: '0.800rem',
  },
  loginNav: {
    '&:hover + $darkScreen': {
      opacity: 1,
      transitionDelay: '0.5s',
      // display: 'block'
    }
  },
  loginMenu: {
    paddingLeft: '49.8%',
    display: 'block',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '80%'
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

const NavBar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.searchNav}>
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
        </Toolbar>
      </AppBar>
      <div className={classes.bottomNavBar}>
            <div className={classes.loginNav}>
              <NavLink to={loginRoute} className={classes.noUnderline}>
                <Button color="secondary" className={classes.bottomNavBarButton}>
                  {signInButton}
                  <ArrowDropDown className={classes.arrowDropDown}/>
                </Button>
              </NavLink>
              {/* <div className={classes.loginMenu}>
                <Button color="secondary">Sign in</Button>
                <Button color="secondary">Sign up</Button>
            </div> */}
            </div>
            <div className={classes.darkScreen}></div>
      </div>
    </div>
  );
}

export default withStyles(styles)(NavBar);