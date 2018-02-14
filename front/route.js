/* @flow */

import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './containers/home';
import App from './containers/app';

const AppRoute = () => (
  <Switch>
    <Route path='/new' component={App} />
    <Route exaxt path='/' component={Home} />
  </Switch>
);

export default AppRoute;
