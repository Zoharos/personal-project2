import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import List from './List';
import { Helmet } from 'react-helmet';
import Login from './Login/index';
import ForgotPassword from './ForgotPassword/index';
import Estate from './Estate';
import { PrivateRoute } from './MaterialComponents';


export default function App(props) {

    return (
        <div className="imgbox">
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/forgotPassword" component={ForgotPassword} />
                <PrivateRoute exact path="/estate" component={Estate} />
            </Switch>
        </div>
    )
};
