import { api } from "../api";

export async function postCriarConta() {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    return error.response;
  }
}