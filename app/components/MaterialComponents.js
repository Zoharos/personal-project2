import React from 'react';
import {
  Route,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';

function styles()  {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#2196f3',
      },
    },
  });
    const styles = theme => ({
        menuButton: {
          marginLeft: -18,
          marginRight: 10,
        },
        homeCard: {
          margin: '10%',
          width: 400,
        },
        right: {
          float: 'right',
        },
        appBar: {
          background: 'transparent',
          boxShadow: 'none',
          transition: 'all 0.5s ease',
          '&:hover': {
            background: 'floralwhite',
            color: 'black',
          }
        },
        navLinkBtn: {
          textDecoration: 'none',
          color: 'inherit',
        },
        flex: {
          flex: 1
        },
        dialogContent: {
          marginTop: 500
        },
        card: {
          maxWidth: 345,
        },
        media: {
          height: 140,
          backgroundSize: '100% 100%',
        },
        fullWidth: {
          width: '100%'
        },
    });
    return [styles,theme];
}

const styles_estate = theme => ({
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
   /*  marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }), */
  },
  menuButton: {
    marginLeft: 20,
    marginRight: 30,
  },
  menuButtonOpen: {
    marginLeft: 20,
    marginRight: 6,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class Elink extends React.Component {
  parseTo(to) {
    let parser = document.createElement('a');
    parser.href = to;
    return parser;
  }
  isInternalUrl(toLoaction) {
    return window.location.host === toLoaction.host;
  }

  render() {
    const {to, buttonString, isNav, ...rest} = this.props;
    const toLocation = this.parseTo(to);
    const isInternal= this.isInternalUrl(toLocation);
    const element = isInternal ? ( isNav ? <NavLink {...rest} className="navLinkBtn" key={buttonString} to={toLocation.pathname}><Button size="large" color="inherit" >{buttonString}</Button></NavLink> 
    : <Link {...rest} className="navLinkBtn" key={buttonString} to={toLocation.pathname}><Button size="large" color="inherit" >{buttonString}</Button></Link> ) 
    : <Button {...rest} href={toLocation.pathname} size="large" color="inherit" >{buttonString}</Button>

    return element;
  }
}

const auth = {
  isAuthenticated: false,
  authenticate() {
    this.isAuthenticated = true;
  },
  signout() {
    this.isAuthenticated = false;
  }
}

 const PrivateRoute = ({component: Component}) => (
  <Route
    render={props => 
      auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: "/"
        }}
        />
      )
    }
  />  
); 

export {styles,PrivateRoute,auth,Elink};