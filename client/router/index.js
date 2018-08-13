import React from 'react'
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import Home from '../ui/scenes/Home/index'
import UserLogged from '../ui/scenes/UserLogged/index'

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route component={Home}/>
    </Switch>
  </Router>
);


