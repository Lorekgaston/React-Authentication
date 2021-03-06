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
    ...createFromConfig('text', 'Username', 'userName', 'Choose an username'),
    validateRules: [
      requiredRule('Username'),
      minLengthRule('Username', 3),
      maxLengthRule('Username', 20)
    ]
  },
  email: {
    ...createFromConfig('email', 'Email', 'email', 'example@example.com'),
    validateRules: [requiredRule('email'), validEmailRule()]
  },
  password: {
    ...createFromConfig(
      'password',
      'Password',
      'password',
      'Choose a password'
    ),
    validateRules: [
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
    validateRules: [requiredRule('Confirm password'), passwodMatchRule()]
  }
};

export const loginForm = {
  userName: {
    ...createFromConfig('text', 'Username', 'userName', 'Enter your username'),
    validateRules: [requiredRule('Username')]
  },
  password: {
    ...createFromConfig(
      'password',
      'Password',
      'password',
      'Enter your password'
    ),
    validateRules: [requiredRule('password')]
  }
};
