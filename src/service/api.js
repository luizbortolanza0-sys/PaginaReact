import axios from "axios";
import {postRefreshToken} from "./post/postRefreshToken.js"

const api = axios.create({
  baseURL: "http://72.60.54.143:3000",
  timeout: 1000,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    
    if (error.response.status === 401 && !error.config._retry && !error.config.skipAuthRefresh) {
      error.config._retry = true;
      error.config.skipAuthRefresh = false;
      try {
        const newToken = await postRefreshToken(
          localStorage.getItem("refreshToken"),
        );
        console.log(newToken)

        localStorage.setItem("token", newToken);
        return api(error.config);
      } catch (err) {
        console.log(err)
        localStorage.clear();
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  },
);

export {api}