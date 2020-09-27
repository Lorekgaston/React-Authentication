import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <h3>Log into your acount</h3>
        <form action="">
          <h5>Email Address</h5>
          <div className="login__input">
            <input type="text" />
          </div>
          <h5>Password</h5>
          <div className="login__input">
            <input type="password" />
          </div>
          <button className="login__container-signInButton">Log In</button>
        </form>
        <p>
          By continuing, you agree to L&L's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
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
