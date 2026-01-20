import { api } from "../api";

export async function postLogin(user) {
  try {
    const response = await api.post('/api/login', user);
    localStorage.setItem("token" , await response.data.token)
    return response;
  } catch (error) {
    return error.response;
  }  
}