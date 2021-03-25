/* eslint-disable react/display-name */
import React from 'react';
import InputFiled from '../components/InputField/InputField';
import {
  maxLengthRule,
  minLengthRule,
  passwodMatchRule,
  requiredRule,
  validEmailRule
} from './validate';

const createFromConfig = (
  type,
  label,
  name,
  placeholder,
  defaultValue = ''
) => {
  return {
    renderInput: (handleChange, value, valid, errorMessage, key) => {
      return (
        <InputFiled
          key={key}
          type={type}
          placeholder={placeholder}
          name={name}
          label={label}
          isValid={valid}
          value={value}
          handleChange={handleChange}
          errorMessage={errorMessage}
        />
      );
    },
    label,
    value: defaultValue,
    valid: false,
    errorMessage: '',
    touched: false
  };
};

export const registerForm = {
  userName: {
    ...createFromConfig('text', 'User Name', 'userName', 'Choose an user name'),
    validateRultes: [
      requiredRule('User name'),
      minLengthRule('User name', 3),
      maxLengthRule('User name', 20)
    ]
  },
  email: {
    ...createFromConfig('email', 'Email', 'email', 'example@example.com'),
    validateRultes: [requiredRule('email'), validEmailRule()]
  },
  password: {
    ...createFromConfig(
      'password',
      'Password',
      'password',
      'Choose a password'
    ),
    validateRultes: [
      requiredRule('password'),
      minLengthRule('Password', 8),
      maxLengthRule('Password', 40)
    ]
  },
  passwordConfirm: {
    ...createFromConfig(
      'password',
      'Confirm password',
      'passwordConfirm',
      'Rewrite your password'
    ),
    validateRultes: [requiredRule('Confirm password'), passwodMatchRule()]
  }
};
