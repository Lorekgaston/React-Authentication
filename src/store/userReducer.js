export const intialState = {
  email: '',
  password: '',
  passwordConfirm: '',
  userName: '',
  isLoading: false,
  error: '',
  isLoggedIn: false,
  token: null,
  user: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.field]: action.value
      };
    }
    case 'login': {
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    }
    case 'success': {
      console.log(action);
      return {
        ...state,
        isLoggedIn: true,
        token: action.token,
        user: action.user
      };
    }
    case 'error': {
      return {
        ...state,
        error: action.message,
        isLoading: false,
        isLoggedIn: false,
        email: '',
        password: '',
        passwordConfirm: '',
        userName: ''
      };
    }
    case 'logout': {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        email: '',
        password: '',
        passwordConfirm: '',
        userName: '',
        token: null,
        user: null
      };
    }

    default:
      break;
  }
  return state;
};

export default reducer;
