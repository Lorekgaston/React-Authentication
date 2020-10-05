import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.scss';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Profile from './components/Profile/Profile';
import { useLoginState } from './store/context';
import Axios from 'axios';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import AccountSettings from './components/AccountSettings/AccountSettings';

function App() {
  const [state, dispatch] = useLoginState();
  // const history = useHistory();
  const { email, password, isLoading, error, isLoggedIn } = state;
  useEffect(() => {
    const checkIfLogged = async () => {
      try {
        let token = localStorage.getItem('auth-token');
        if (token === null) {
          localStorage.setItem('auth-token', '');
          token = '';
        }
        const tokenRes = await Axios.post(
          'http://127.0.0.1:9000/api/v1/users/tokenIsvalid',
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        console.log(tokenRes.data);
        if (tokenRes.data) {
          const userRes = await Axios.get(
            'http://127.0.0.1:9000/api/v1/users/user',
            {
              headers: { Authorization: `Bearer ${token}` }
            }
          );
          dispatch({ type: 'success', token, user: userRes.data.user });
        }
      } catch (err) {
        dispatch({ type: 'error', message: err.response.data.message });
        localStorage.setItem('auth-token', '');
      }
    };
    checkIfLogged();
  }, [dispatch]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (!isLoggedIn ? <Login /> : <Home />)}
          />
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/account">
            <AccountSettings />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
