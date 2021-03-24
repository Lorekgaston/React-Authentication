import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Signup/Register';

import './App.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
