import React from 'react';
import './InputField.scss';

const InputField = ({
  type,
  placeholder,
  name,
  label,
  value,
  handleChange,
  isValid,
  errorMessage
}) => {
  console.log(errorMessage);
  return (
    <div className="InputContainer">
      <label>{label}</label>
      <input
        className={
          errorMessage && !isValid
            ? 'InputContainer__input inputError'
            : 'InputContainer__input'
        }
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {errorMessage && !isValid && (
        <span className="ErrorMessage">{errorMessage}</span>
      )}
    </div>
  );
};

export default InputField;
