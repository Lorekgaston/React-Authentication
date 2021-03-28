import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:9000/api/v1/users/';
const user = localStorage.getItem('user');
const userApiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${user.token}`
  }
});

export default userApiInstance;
