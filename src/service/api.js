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
    
    
    if (error.response.status === 401 && !error.config._retry && !originalRequest.skipAuthRefresh) {      
      error.config._retry = true;
      try {
        const newToken = await postRefreshToken(
          localStorage.getItem("refreshToken"),
        );
        console.log (newToken);
        console.log (newToken.refreshToken == localStorage.getItem("refreshToken"))
        if(newToken.refreshToken != undefined && newToken.token != undefined){
          localStorage.setItem("refreshToken", newToken.refreshToken);
          localStorage.setItem("token", newToken.token);
        }
        
        
        originalRequest.headers.Authorization = `Bearer ${newToken.token}`;
        return api(originalRequest);
      } catch (err) {
        localStorage.clear();
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  },
);

export {api}