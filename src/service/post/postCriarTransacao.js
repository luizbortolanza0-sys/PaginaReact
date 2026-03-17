import { api } from "../api";

export async function postCriarTransacao(transacao) {
  try {
    const response = await api.post("/api/transacoes", transacao);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
