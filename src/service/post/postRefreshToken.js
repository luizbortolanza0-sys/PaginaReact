import { api } from "../api";

export async function postRefreshToken(token) {
  const refresh = {
    refreshToken : token
  }
  try {
    const response = await api.post("/api/refresh-token", refresh);
    return response.data.token;
  } catch (error) {
    return error.response.data;
  }
}