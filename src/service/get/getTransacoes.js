import { api } from "../api";

export async function getTransacoes(pagina, quantidade) {
  try {
    const response = await api.get(
      `/api/transacoes?pagina=${pagina}&limite=${quantidade}`);
    return response.data;
  } catch (error) {
    return error.response;
  }
}
