import { api } from "../api";

export async function postRefreshToken(token) {
  const refresh = {
    refreshToken : token
  }
  try {
    const response = await api.post("/api/refresh-token", refresh);
    return response.data;
  } catch (error) {
    return error
  }
}