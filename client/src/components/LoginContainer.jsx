import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function LoginContainer() {
    return(
    <section id="login-container">
        <div className="login-wrap">
            <Switch>
                <Route path="/login" component={LoginForm} />
                <Route path="/register" component={RegisterForm} />
            </Switch>
        </div>
    </section>
)}

export default LoginContainer;