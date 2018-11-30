import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import List from './components/List';
import { Helmet } from 'react-helmet';
import Home from './components/Home';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Estate from './components/Estate';
import { PrivateRoute } from './components/MaterialComponents';

const App = (props) => {
    return (
        <div className="imgbox">
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/forgotPassword" component={ForgotPassword} />
                <PrivateRoute exact path="/estate" component={Estate} />
            </Switch>
        </div>
    )
};
export default App;