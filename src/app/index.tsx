import * as React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import App from 'app/containers/App';

export const Router = hot(module)(() => (
  <Switch>
    <Route path="/" component={App} />
  </Switch>
));
