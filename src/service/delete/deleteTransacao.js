import { api } from "../api";

export async function deleteTransacao(id) {
  try {
    const response = await api.delete(`/api/transacoes/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}