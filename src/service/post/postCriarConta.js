import { api } from "../api";

export async function postCriarConta(user) {
  try {
    const response = await api.post("/api/criar-conta", user);
    return response.data;
  } catch (error) {
    return error.response;
  }
}
