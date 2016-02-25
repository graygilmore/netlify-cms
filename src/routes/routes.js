import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from '../containers/App';
import DashboardPage from '../containers/DashboardPage';
import NotFoundPage from '../containers/NotFoundPage';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={DashboardPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);