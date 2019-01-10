import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { rootRoute, loginRoute, forgotPasswordRoute } from './constants'
import Home from './components/PageComponents/Home';
import Login from './containers/Login';
import ForgotPassword from './containers/ForgotPassword';
import NotFound from './components/PageComponents/404';
import { PrivateRoute } from './components/MaterialComponents';

const App = (props) => {
    return (
        <div className="imgbox">
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Switch>
                <Route exact path={rootRoute} component={Home} />
                <Route exact path={loginRoute} component={Login} />
                <Route exact path={forgotPasswordRoute} component={ForgotPassword} />
                <Route component={NotFound} />
                {/* <PrivateRoute exact path="/estate" component={Estate} /> */}
            </Switch>
        </div>
    )
};
export default App;