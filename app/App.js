import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './components/PageComponents/Home';
import Login from './containers/Login';
import ForgotPassword from './components/PageComponents/ForgotPassword';
import { PrivateRoute } from './components/MaterialComponents';

const App = (props) => {
    return (
        <div className="imgbox">
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/forgotPassword" component={ForgotPassword} />
                {/* <PrivateRoute exact path="/estate" component={Estate} /> */}
            </Switch>
        </div>
    )
};
export default App;