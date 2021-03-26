import React from 'react';
import { Link } from 'react-router-dom';
import { userAction } from '../../redux/actions/user';
import { registerForm } from '../../helpers/formConfig';
import useForm from '../../hooks/useForm';

import './Register.scss';

const Register = () => {
  const { renderFormInputs, validateForm, handleSubmit } = useForm(
    registerForm,
    userAction.register
  );

  return (
    <div className="Register">
      <div className="Register__container">
        <h3>Sign up</h3>
        <form onSubmit={handleSubmit}>
          {renderFormInputs()}
          <p>
            By clicking Sign Up, you are indicating that you have read and
            acknowledge the Terms of Service and Privacy Notice.
          </p>
          <button
            className="Register__container-registerButton"
            type="submit"
            disabled={!validateForm()}
          >
            Sign Up
          </button>
        </form>
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
