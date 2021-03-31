import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const useForm = (objForm, action, serverError) => {
  const [form, setForm] = useState(objForm);
  const dispatch = useDispatch();
  const location = useLocation();

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
    const completedForm = { ...form };

    const { from } = location.state || { from: { pathname: '/' } };
    let userObj = {};
    for (let values in form) {
      Object.assign(userObj, { [values]: completedForm[values].value });
    }
    if (validateForm()) {
      dispatch(action(userObj, from));
    }
  };

  const validateFromServer = name => {
    const userObj = { ...form[name] };

    userObj.valid = false;
    userObj.errorMessage = serverError;
    console.log('works');
    setForm({ ...form, [name]: userObj });
  };

  const handleServerError = () => {
    if (serverError && serverError.includes('username')) {
      validateFromServer('userName');
    }
    if (serverError && serverError.includes('email')) {
      validateFromServer('email');
    }
    if (serverError && serverError.includes('password')) {
      validateFromServer('password');
    }
    return;
  };
  return { renderFormInputs, validateForm, handleSubmit, handleServerError };
};

export default useForm;
