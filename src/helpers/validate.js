const validationRule = (ruleName, errorMessage, cb) => {
  return {
    name: ruleName,
    message: errorMessage,
    validate: cb
  };
};

export const requiredRule = inputName => {
  return validationRule(
    'required',
    `${inputName} required`,
    (value, formObj) => value.length !== 0
  );
};
export const minLengthRule = (inputName, minCharacters) => {
  return validationRule(
    'minLength',
    `${inputName} should contain atleast ${minCharacters} characters`,
    (value, formObj) => value.length >= minCharacters
  );
};
export const maxLengthRule = (inputName, maxCharacters) => {
  return validationRule(
    'maxLength',
    `${inputName} cannot contain more than ${maxCharacters} characters`,
    (inputValue, formObj) => inputValue.length <= maxCharacters
  );
};
export const validEmailRule = () => {
  return validationRule(
    'validEmal',
    `Enter a valid email`,
    (inputValue, formObj) =>
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        inputValue
      )
  );
};
export const passwodMatchRule = () => {
  return validationRule(
    'passwordMatch',
    'paswords does not match',
    (inputValue, formObj) => inputValue === formObj.password.value
  );
};
