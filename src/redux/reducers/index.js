import { combineReducers } from 'redux';
import login from './login';
import register from './register';
import users from './users';

const rootReducer = combineReducers({
  login,
  register,
  users
});

export default rootReducer;
