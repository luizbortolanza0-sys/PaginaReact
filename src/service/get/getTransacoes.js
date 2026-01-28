import { api } from "../api";

export async function getTransacoes(pagina, quantidade, token) {
  try {
    const response = await api.get(
      `/api/transacoes?pagina=${pagina}&limite=${quantidade}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log(response);
    return response.data;
  } catch (error) {
    return error.response;
  }
}
