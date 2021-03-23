import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup__container">
        <h3>Sign up</h3>

        <form action="">
          <h5>UserName</h5>
          <div className="signup__input">
            <input type="text" />
          </div>
          <h5>Email Address</h5>
          <div className="signup__input">
            <input type="text" />
          </div>
          <h5>Password</h5>
          <div className="signup__input">
            <input type="password" />
          </div>
          <h5>Confirm Password</h5>
          <div className="signup__input">
            <input type="password" />
          </div>
          <button className="signup__container-signUpButton">Sign Up</button>
        </form>
        <p>
          By continuing, you agree to L&L`s Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <div className="signup__footer">
        <p>Already have an account?</p>
        <Link to="/login">
          <button className="login__registerButton">Go to Log In Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
