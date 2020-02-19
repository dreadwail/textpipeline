import Home from 'components/Home';
import NotFound from 'components/NotFound';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from '../../routes';

const PageRouter: React.FC = () => (
  <Switch>
    <Route {...routes.home}>
      <Home />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default PageRouter;
