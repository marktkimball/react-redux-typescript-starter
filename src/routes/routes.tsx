import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'containers/app';

export const Routes: React.SFC<{}> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AppContainer} />
    </Switch>
  </BrowserRouter>
);
