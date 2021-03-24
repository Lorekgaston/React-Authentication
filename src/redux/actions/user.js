import { userConstants } from '../constants';
import { userService } from '../../services/users.service';
import { history } from '../../helpers/history';
import axios from 'axios';

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
  const request = () => {
    return { type: userConstants.USERS_REGISTER_REQUEST };
  };
  const success = user => {
    return { type: userConstants.USERS_REGISTER_SUCCESS, user };
  };
  const failure = error => {
    return { type: userConstants.USERS_REGISTER_FAILURE, error };
  };

  return async dispatch => {
    dispatch(request);
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

export const userAction = {
  login,
  logOut,
  register
};
