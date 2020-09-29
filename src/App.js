import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.scss";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { useLoginState } from "./store/context";
import Axios from "axios";

function App() {
  const [state, dispatch] = useLoginState();
  const history = useHistory();
  const { email, password, isLoading, error, isLoggedIn } = state;
  useEffect(() => {
    const checkIfLogged = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://127.0.0.1:9000/api/v1/users/tokenIsvalid",
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(tokenRes.data);
      if (tokenRes.data) {
        const userRes = await Axios.get(
          "http://127.0.0.1:9000/api/v1/users/user",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(userRes);
        dispatch({ type: "success", token, user: userRes.data.user });
      }
      // history.push("/login");
    };
    checkIfLogged();
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
