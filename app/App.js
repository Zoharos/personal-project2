import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { rootRoute, loginRoute, forgotPasswordRoute, registerRoute } from './constants'
import Home from './containers/Home';
import Login from './containers/Login';
import ForgotPassword from './containers/ForgotPassword';
import Register from './containers/Register';
import NotFound from './components/PageComponents/404';
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
                <Route exact path={registerRoute} component={Register} />
                <Route component={NotFound} />
                {/* <PrivateRoute exact path="/estate" component={Estate} /> */}
            </Switch>
        </div>
    )
};
export default App;