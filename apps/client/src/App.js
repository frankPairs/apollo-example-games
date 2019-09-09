import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Header, Sidebar, Menu } from './components/Layout';
import UserRouter from './features/users/Router';
import GameRouter from './features/games/Router';
import MatchRouter from './features/matches/Router';
import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Sidebar
        variant="persistent"
        anchor="left"
        open
        classes={{
          paper: 'paper',
        }}
        className="sidebar-left"
      >
        <Menu />
      </Sidebar>
      <Header className="header" />
      <main>
        <Switch>
          <Route path="/users" component={UserRouter} />
          <Route path="/games" component={GameRouter} />
          <Route path="/matches" component={MatchRouter} />
          <Redirect to="/users" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
