import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { userAction } from '../../redux/actions/user';
import { registerForm } from '../../helpers/formConfig';

import './Register.scss';

const Register = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(registerForm);

  const renderFormInputs = () => {
    return Object.values(form).map(inputObj => {
      const { value, label, errorMessage, valid, renderInput } = inputObj;
      return renderInput(handleChange, value, valid, errorMessage, label);
    });
  };
  const handleChange = e => {
    const { name, value } = e.target;
    const inputObj = { ...form[name] };

    inputObj.value = value;

    const isValidInput = isInputFieldValid(inputObj);

    if (isValidInput && !inputObj.valid) {
      inputObj.valid = true;
    } else if (!isValidInput && inputObj.valid) {
      inputObj.valid = false;
    }

    inputObj.touched = true;
    setForm({ ...form, [name]: inputObj });
  };

  const isInputFieldValid = useCallback(
    inputField => {
      for (const rule of inputField.validateRules) {
        if (!rule.validate(inputField.value, form)) {
          inputField.errorMessage = rule.message;
          return false;
        }
      }
      return true;
    },
    [form]
  );
  const validateForm = useCallback(() => {
    let isValid = true;
    const inputs = Object.values(form);

    for (let i = 0; i < inputs.length; i++) {
      if (!inputs[i].valid) {
        isValid = false;
        break;
      }
    }
    return isValid;
  }, [form]);

  const handleSubmit = e => {
    e.preventDefault();
    const newForm = { ...form };

    let newUser = {};
    for (let values in form) {
      Object.assign(newUser, { [values]: newForm[values].value });
    }
    dispatch(userAction.register(newUser));
    console.log(newUser);
  };

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
