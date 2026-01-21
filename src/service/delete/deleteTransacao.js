import { api } from "../api";

export async function deleteTransacao(id, token) {
  try {
    const response = await api.delete(
      `/api/transacoes/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}