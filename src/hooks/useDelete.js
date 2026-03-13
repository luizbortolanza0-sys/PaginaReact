import { deleteTransacao } from "../service/delete/deleteTransacao";
import { useState } from "react";

export const useDelete = ( id ) => {
    const [alerta, setAlert] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");

    async function deletarTransacao() {
        const response = await deleteTransacao(id, localStorage.getItem("token"));
        const msg = response.mensagem ?? response.erro
        setMensagem(msg);
        setAlert(true);
        if (msg == response.erro) {
            setTipoMensagem("error");
            return;
        }
        setTipoMensagem("success");

    }
    return {
        alerta,
        mensagem,
        tipoMensagem,
        setAlert,
        deletarTransacao
    }
}