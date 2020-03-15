import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginScreen from './LoginScreen';
import CreateUserScreen from './CreateUserScreen';
import WelcomeScreen from './WelcomeScreen';

const AuthScreen = props => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginScreen />
                </Route>
                <Route path="/createuser">
                    <CreateUserScreen />
                </Route>
                <Route path="/:username" render={(props) => <WelcomeScreen {...props} />}/> 
            </Switch>
        </BrowserRouter>
    )
};

export default AuthScreen;