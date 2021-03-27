import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { userAction } from '../../redux/actions/user';
import { loginForm } from '../../helpers/formConfig';
import useForm from '../../hooks/useForm';
import './Login.scss';

const Login = () => {
  const dispatch = useDispatch();
  const { isLoggingIn, serverError, isError } = useSelector(
    state => state.login
  );
  const {
    renderFormInputs,
    validateForm,
    handleSubmit,
    handleServerError
  } = useForm(loginForm, userAction.login, serverError);
  useEffect(() => {
    dispatch(userAction.logOut());
  }, []);

  useEffect(() => {
    if (!isLoggingIn) {
      handleServerError();
    }
  }, [isError]);
  return (
    <div className="login">
      <div className="login__container">
        <h3>Log into your account</h3>
        <form onSubmit={handleSubmit}>
          {renderFormInputs()}
          <p>
            By clicking Sign Up, you are indicating that you have read and
            acknowledge the Terms of Service and Privacy Notice..
          </p>
          <button
            className="login__container-signInButton"
            disabled={!validateForm()}
          >
            {isLoggingIn ? 'loggin In' : 'Log In'}
          </button>
        </form>
      </div>
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
