import { userConstants } from '../constants';
import { userService } from '../../services/users.service';
import { history } from '../../helpers/history';

const login = (loginUser, from) => {
  const request = user => {
    return { type: userConstants.USERS_LOGIN_REQUEST, user };
  };
  const success = user => {
    return { type: userConstants.USERS_LOGIN_SUCCESS, user };
  };
  const failure = error => {
    return { type: userConstants.USERS_LOGIN_FAILURE, error };
  };
  return async dispatch => {
    dispatch(request(loginUser));
    try {
      const user = await userService.login(loginUser);
      dispatch(success(user));
      if (user) {
        history.push(from);
      }
    } catch (err) {
      dispatch(failure(err.response.data.message));
      console.log(err.response.data);
    }
  };
};
const logOut = () => {
  userService.logout();
  return { type: userConstants.USERS_LOGOUT };
};

const register = newUser => {
  const request = user => {
    return { type: userConstants.USERS_REGISTER_REQUEST, user };
  };
  const success = user => {
    return { type: userConstants.USERS_REGISTER_SUCCESS, user };
  };
  const failure = error => {
    return { type: userConstants.USERS_REGISTER_FAILURE, error };
  };

  return async dispatch => {
    dispatch(request(newUser));
    try {
      const _newUser = await userService.register(newUser);
      dispatch(success(_newUser));
      history.push('/login');
    } catch (err) {
      dispatch(failure(err.response.data.message));
      console.log(err.response.data.message);
    }
  };
};

const getAllUsers = user => {
  const request = loading => {
    return { type: userConstants.GET_ALL_USERS_REQUEST, loading };
  };
  const success = users => {
    return { type: userConstants.GET_ALL_USERS_SUCCESS, users };
  };
  const failure = error => {
    return { type: userConstants.GET_ALL_USERS_FAILURE, error };
  };

  return async dispatch => {
    dispatch(request(true));
    try {
      const users = await userService.getAllUsers(user);
      dispatch(success(users.data));
    } catch (err) {
      dispatch(failure(err.response.data.message));
    }
  };
};

export const userAction = {
  login,
  logOut,
  register,
  getAllUsers
};
