import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Signup/Register';

const App = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
};

export default App;
