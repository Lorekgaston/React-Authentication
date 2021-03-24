import { userConstants } from '../constants';
const {
  USERS_REGISTER_REQUEST,
  USERS_REGISTER_SUCCESS,
  USERS_REGISTER_FAILURE
} = userConstants;

const intialState = {
  isLoading: false
};

const register = (state = intialState, action) => {
  switch (action.type) {
    case USERS_REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case USERS_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case USERS_REGISTER_FAILURE:
      return {
        ...state,
        isError: true,
        errorMessage: action.error,
        isLoading: false
      };
    default:
      return state;
  }
};

export default register;
