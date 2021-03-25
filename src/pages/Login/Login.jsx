import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { userAction } from '../../redux/actions/user';
// import validate from '../../helpers/validate';
import './Login.scss';

const Login = () => {
  // const [values, setValues] = useState({
  //   email: '',
  //   password: ''
  // });
  // const [error, setError] = useState({});
  // const [touched, setTouched] = useState({});

  // const { isLoggingIn, serverError } = useSelector(state => state.login);
  // const [submmitted, setSubmmitted] = useState(false);
  // const dispatch = useDispatch();
  // const location = useLocation();

  // useEffect(() => {
  //   dispatch(userAction.logOut());
  // }, []);

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setValues(values => ({ ...values, [name]: value }));
  //   setTouched({
  //     ...values,
  //     [name]: true
  //   });
  // };

  // const handleBlur = e => {
  //   const { name, value } = e.target;

  //   const { [name]: removedError, ...rest } = error;

  //   const newError = validate[name](value);

  //   setError({
  //     ...rest,
  //     ...(newError && { [name]: touched[name] && newError })
  //   });
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   const formValidation = Object.keys(values).reduce(
  //     (acc, key) => {
  //       const newError = validate[key](values[key]);
  //       const newTouched = { [key]: true };
  //       return {
  //         error: {
  //           ...acc.error,
  //           ...(newError && { [key]: newError })
  //         },
  //         touched: {
  //           ...acc.touched,
  //           ...newTouched
  //         }
  //       };
  //     },
  //     { error: { ...error }, touched: { ...touched } }
  //   );

  //   setError(formValidation.error);
  //   setTouched(formValidation.touched);

  //   if (
  //     !Object.values(formValidation.error).length &&
  //     Object.values(formValidation.touched).length ===
  //       Object.values(values).length &&
  //     Object.values(formValidation.touched).every(t => t === true)
  //   ) {
  //     setSubmmitted(true);
  //     const { from } = location.state || { from: { pathname: '/' } };
  //     dispatch(userAction.login(values, from));
  //   }
  // };
  return (
    <div className="login">
      {/* <div className="login__container">
        <h3>Log into your acount</h3>
        {serverError && (
          <span className="login__container_serverError">{serverError}</span>
        )}
        <form onSubmit={handleSubmit}>
          <h5>Email Address</h5>
          <div
            className={
              error.email
                ? 'login__inputContainer isNotValid'
                : 'login__inputContainer'
            }
          >
            <input
              className="login__inputContainer_input"
              type="text"
              id="email-address-input"
              placeholder="someone@mail.com"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && (
              <span className="login__inputContainer_error">{error.email}</span>
            )}
          </div>
          <h5>Password</h5>
          <div
            className={
              error.password
                ? 'login__inputContainer isNotValid'
                : 'login__inputContainer'
            }
          >
            <input
              className="login__inputContainer_input"
              type="password"
              id="password-input"
              placeholder="1234567"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && (
              <span className="login__inputContainer_error">
                {error.password}
              </span>
            )}
          </div>
          <button className="login__container-signInButton">
            {submmitted && isLoggingIn ? 'loggin In' : 'Log In'}
          </button>
        </form>
        <p>
          By continuing, you agree to L&L`s Conditions of Use and Privacy
          Notice.
        </p>
      </div>

      <br />
      <br />
      <div className="login__footer"> */}
      <p>You don`t have an account?</p>
      <Link to="/register">
        <button className="login__registerButton">Create Acount</button>
      </Link>
      {/* </div> */}
    </div>
  );
};

export default Login;
