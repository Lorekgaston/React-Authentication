import React from 'react';
import PropTypes from 'prop-types';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';

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
      <label>
        {errorMessage && !isValid ? (
          <>
            {label}
            <ErrorIcon className="ErrorIcon" />
          </>
        ) : isValid ? (
          <>
            {label}
            <CheckCircleIcon className="CheckIcon" />
          </>
        ) : (
          <>{label}</>
        )}
      </label>
      <input
        className={
          errorMessage && !isValid
            ? 'InputContainer__input inputError'
            : isValid
            ? 'InputContainer__input inputValid'
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

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired
};
