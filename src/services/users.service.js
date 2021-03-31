import axios from 'axios';

const BASE_URL = 'https://reactauthserver.herokuapp.com/api/v1/users/';

const register = async newUser => {
  return await axios.post(`${BASE_URL}signup`, newUser);
};

const login = async loginUser => {
  const response = await axios.post(`${BASE_URL}login`, loginUser);

  if (response.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data));
    return response.data;
  }
};
const logout = () => {
  localStorage.removeItem('user');
};

const getUser = id => {
  return axios.get(`${BASE_URL}${id}`);
};

const getAllUsers = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const { token } = user;
  console.log(user);

  if (user) {
    return axios.get(`${BASE_URL}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};

const checkIfValidToken = () => {
  return axios.post(`${BASE_URL}tokenIsvalid`, null);
};

export const userService = {
  register,
  login,
  logout,
  getUser,
  checkIfValidToken,
  getAllUsers
};
