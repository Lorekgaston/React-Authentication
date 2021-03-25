import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { userAction } from '../../redux/actions/user';
import { loginForm } from '../../helpers/formConfig';
import './Login.scss';

const Login = () => {
  const { isLoggingIn, serverError } = useSelector(state => state.login);
  const [form, setForm] = useState(loginForm);
  const [submmitted, setSubmmitted] = useState(false);
  // const dispatch = useDispatch();
  // const location = useLocation();

  const renderLoginForm = () => {
    return Object.values(form).map(inputObj => {
      const { value, label, errorMessage, valid, renderInput } = inputObj;
      return renderInput(handleChange, value, valid, errorMessage, label);
    });
  };

  const handleChange = () => {};
  const handleSubmit = e => {
    e.preventDefault();
    // setSubmmitted(true);
    // const { from } = location.state || { from: { pathname: '/' } };
    // dispatch(userAction.login(values, from));
  };
  return (
    <div className="login">
      <div className="login__container">
        <h3>Log into your account</h3>

        <form onSubmit={handleSubmit}>
          {renderLoginForm()}
          <p>
            By clicking Sign Up, you are indicating that you have read and
            acknowledge the Terms of Service and Privacy Notice..
          </p>
          <button className="login__container-signInButton">
            {submmitted && isLoggingIn ? 'loggin In' : 'Log In'}
          </button>
        </form>
      </div>

      <br />
      <br />
      <div className="login__footer">
        <p>You don`t have an account?</p>
        <Link to="/register">
          <button className="login__registerButton">Create Acount</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;

// {serverError && (
//   <span className="login__container_serverError">{serverError}</span>
// )}
