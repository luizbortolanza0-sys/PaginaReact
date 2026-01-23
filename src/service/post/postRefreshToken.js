import { api } from "../api";

export async function postRefreshToken(token) {
  try {
    const response = await api.post("/api/refresh-token", token);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}