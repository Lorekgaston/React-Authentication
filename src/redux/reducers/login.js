import { userConstants } from '../constants';

const user = JSON.parse(localStorage.getItem('user'));
const intialState = user ? { isLoggedIn: true, user } : {};

const login = (state = intialState, action) => {
  switch (action.type) {
    case userConstants.USERS_LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        user: action.user
      };
    case userConstants.USERS_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false,
        user: action.user
      };
    case userConstants.USERS_LOGIN_FAILURE:
      return {
        ...state,
        serverError: action.error,
        isLoggingIn: false,
        isLoggedIn: false
      };
    case userConstants.USERS_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default login;
