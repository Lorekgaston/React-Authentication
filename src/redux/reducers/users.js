import { userConstants } from '../constants';

const {
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE
} = userConstants;

const initialState = {
  isLoading: false,
  userList: null,
  isError: false,
  errorMessage: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
      return {
        ...state,
        isLoading: action.lading
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userList: action.users
      };
    case GET_ALL_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
};

export default reducer;
