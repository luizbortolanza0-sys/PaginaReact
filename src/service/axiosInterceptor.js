import axios from 'axios';
import { postRefreshToken } from './post/postRefreshToken';

axios.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const newToken = await postRefreshToken(localStorage.getItem('refreshToken'));
      localStorage.setItem('token', newToken);
      return axios(error.config);
    }
    return Promise.reject(error);
  }
);

export default axios;