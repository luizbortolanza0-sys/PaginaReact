import axios from "axios";
import {postRefreshToken} from "./post/postRefreshToken.js"

const api = axios.create({
  baseURL: "http://72.60.54.143:3000",
  timeout: 1000,
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {

    const originalRequest = error.config;
    
    if (error.response.status === 401 && !originalRequest.skipAuthRefresh) {
      
      try {
        
        const newToken = await postRefreshToken(
          localStorage.getItem("refreshToken"),
        );
        localStorage.setItem("token", newToken);
        
        
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        

        return api(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  },
);

export {api}