const emailValidation = email => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return null;
  }
  if (email.trim() === '') {
    return 'Email is required';
  }
  return 'Please enter a valid email';
};
const passwordValidation = password => {
  if (password.length >= 8) {
    return null;
  }
  if (password === '') {
    return 'Password is required';
  }
  if (password.length <= 7) {
    return 'Password must be at least 8 characters';
  }
};

const usernameValidation = userName => {
  // if (
  //   /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(userName)
  // ) {
  //   return null;
  // }
  if (userName === '') {
    return 'Username is required';
  }
  if (userName.length <= 3) {
    return 'Username should contain atleast 3 characters';
  }
  if (userName.length >= 20) {
    return 'Username cannot contain more than 20 characters';
  }
  return null;
};

const passwordConfirmValidate = passwordConfirm => {
  return 'Passwords do not match. Please try again';
};
const validate = {
  userName: usernameValidation,
  email: emailValidation,
  password: passwordValidation,
  passwordConfirm: passwordConfirmValidate
};

export default validate;

// (?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])
