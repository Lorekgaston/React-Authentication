import Axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { useLoginState } from "../../store/context";
import "./Login.scss";

const Login = () => {
  const [state, dispatch] = useLoginState();
  const { email, password, isLoading, error, isLoggedIn, user } = state;

  const onSubmit = async (e) => {
    e.preventDefault();
    const loginUser = {
      email,
      password,
    };
    dispatch({ type: "login" });
    try {
      const loginRes = await Axios.post(
        "http://127.0.0.1:9000/api/v1/users/login",
        loginUser
      );
      dispatch({
        type: "success",
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
    } catch (err) {
      dispatch({ type: "error", message: err.response.data.message });
    }
  };
  const logout = () => {
    dispatch({ type: "logout" });
    localStorage.setItem("auth-token", "");
  };
  return (
    <div className="login">
      {isLoggedIn ? (
        <>
          <h1>Hello {user.email}</h1>
          <h2>{user.userName}</h2>
          <h3>{user.role}</h3>
          <button onClick={logout} className="login__container-signInButton">
            Log Out
          </button>
        </>
      ) : (
        <div className="login__container">
          <h3>Log into your acount</h3>
          <form action="" onSubmit={onSubmit}>
            {error && <p>{error}</p>}
            <h5>Email Address</h5>
            <div className="login__input">
              <input
                type="text"
                value={email}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    field: "email",
                    value: e.currentTarget.value,
                  })
                }
              />
            </div>
            <h5>Password</h5>
            <div className="login__input">
              <input
                type="password"
                value={password}
                onChange={(e) =>
                  dispatch({
                    type: "field",
                    field: "password",
                    value: e.currentTarget.value,
                  })
                }
              />
            </div>
            <button className="login__container-signInButton">
              {isLoading ? "Loggin in.." : "Log In"}
            </button>
          </form>
          <p>
            By continuing, you agree to L&L's Conditions of Use and Privacy
            Notice.
          </p>
        </div>
      )}
      <br />
      <br />
      <div className="login__footer">
        <p>You don't have an account?</p>
        <Link to="/signup">
          <button className="login__registerButton">Create Acount</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
