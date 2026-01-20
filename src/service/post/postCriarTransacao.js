import { api } from "../api";

export async function postCriarTransacao(transacao, token) {
  try {
    const response = await api.post("/api/transacoes", transacao, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
}
