import { api } from "../api";

export async function postLogin(user) {
  try {
    const response = await api.post('/api/login', user);
    return response;
  } catch (error) {
    return error.response;
  }  
}