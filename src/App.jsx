import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

import './App.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
