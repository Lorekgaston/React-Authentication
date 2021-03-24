import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { userAction } from '../../redux/actions/user';
import validate from '../../helpers/validate';

import './Register.scss';

const Register = () => {
  const { isLoading, errorMessage, isError } = useSelector(
    state => state.register
  );
  const [values, setValues] = useState({
    userName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const [touched, setTouched] = useState({});
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(values => ({ ...values, [name]: value }));
    setTouched({
      ...values,
      [name]: true
    });
  };
  const handleBlur = e => {
    const { name, value } = e.target;

    const { [name]: removedError, ...rest } = error;

    let newError = validate[name](value);

    setError({
      ...rest,
      ...(newError && { [name]: touched[name] && newError })
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // dispatch(userAction.register(values));
  };
  console.log(values, touched);
  return (
    <div className="Register">
      <div className="Register__container">
        <h3>Sign up</h3>
        <form onSubmit={handleSubmit}>
          <h5>UserName</h5>
          <div className="Register__inputContainer">
            <input
              className="Register__inputContainer_input"
              type="text"
              id="username-input"
              placeholder="choose username"
              name="userName"
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.userName && (
              <span className="Register__inputContainer_error">
                {error.userName}
              </span>
            )}
          </div>
          <h5>Email Address</h5>
          <div className="Register__inputContainer">
            <input
              className="Register__inputContainer_input"
              type="text"
              id="email-input"
              placeholder="enter your email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && (
              <span className="Register__inputContainer_error">
                {error.email}
              </span>
            )}
          </div>
          <h5>Password</h5>
          <div className="Register__inputContainer">
            <input
              className="Register__inputContainer_input"
              type="password"
              id="password-input"
              placeholder="choose a password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && (
              <span className="Register__inputContainer_error">
                {error.password}
              </span>
            )}
          </div>
          <h5>Confirm Password</h5>
          <div className="Register__inputContainer">
            <input
              className="Register__inputContainer_input"
              type="password"
              id="passwordConfirm-input"
              placeholder="rewrite your password"
              name="passwordConfirm"
              value={values.passwordConfirm}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.passwordConfirm && (
              <span className="Register__inputContainer_error">
                {error.passwordConfirm}
              </span>
            )}
          </div>
          <button className="Register__container-registerButton">
            Sign Up
          </button>
        </form>
        <p>
          By continuing, you agree to L&L`s Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <div className="Register__footer">
        <p>Already have an account?</p>
        <Link to="/login">
          <button className="login__registerButton">Go to Log In Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
