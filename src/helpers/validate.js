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

const validate = {
  email: emailValidation,
  password: passwordValidation
};

export default validate;
