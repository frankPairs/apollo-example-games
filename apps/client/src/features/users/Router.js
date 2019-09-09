import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ListView, CreateView, UpdateView } from './views';

function Router({ match }) {
  return (
    <Switch>
      <Route exact path={`${match.url}/`} component={ListView} />
      <Route exact path={`${match.url}/new`} component={CreateView} />
      <Route exact path={`${match.url}/:id/edit`} component={UpdateView} />
    </Switch>
  );
}

export default Router;
