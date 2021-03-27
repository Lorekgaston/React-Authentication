import { userConstants } from '../constants';
const {
  USERS_REGISTER_REQUEST,
  USERS_REGISTER_SUCCESS,
  USERS_REGISTER_FAILURE
} = userConstants;

const intialState = {
  isLoading: false,
  serverError: null,
  isError: false
};

const register = (state = intialState, action) => {
  switch (action.type) {
    case USERS_REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        newUser: action.user,
        isError: false
      };
    case USERS_REGISTER_SUCCESS:
      return {
        ...state,
        newUser: action.user,
        isLoading: false,
        isError: false
      };
    case USERS_REGISTER_FAILURE:
      return {
        ...state,
        isError: true,
        serverError: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};

export default register;
