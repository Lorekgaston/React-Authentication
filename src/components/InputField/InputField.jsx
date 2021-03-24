import React from 'react';

const InputField = ({
  type,
  name,
  label,
  value,
  handleChange,
  handleBlur,
  error,
  touched
}) => {
  return (
    <div
      className={
        error.email
          ? 'login__inputContainer isNotValid'
          : 'login__inputContainer'
      }
    >
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && (
        <span className="login__inputContainer_error">{error.email}</span>
      )}
    </div>
  );
};

export default InputField;
