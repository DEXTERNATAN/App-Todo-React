import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sobre from '../Sobre/Sobre';
import Todo from '../Todo/Todo';
import App from './App'

export default props => (
    <BrowserRouter history={hashHistory}>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/sobre" component={Sobre} />
            <Route path="*" component={Todo} />
        </Switch>
    </BrowserRouter>
)
