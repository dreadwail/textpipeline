import NotFound from 'components/NotFound';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'routes';

const PageRouter: React.FC = () => (
  <Switch>
    {Object.keys(routes).map(routeName => (
      <Route key={routeName} {...routes[routeName]} />
    ))}
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default PageRouter;
