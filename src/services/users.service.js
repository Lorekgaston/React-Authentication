import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:9000/api/v1/users/';

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
  return axios.get(`${BASE_URL}/${id}`);
};

const checkIfValidToken = () => {
  return axios.post(`${BASE_URL}tokenIsvalid`, null);
};

const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

export const userService = {
  register,
  login,
  logout,
  getUser,
  checkIfValidToken,
  handleResponse
};
