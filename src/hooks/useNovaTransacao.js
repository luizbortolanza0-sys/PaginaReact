import { useForm } from "react-hook-form";
import { useState } from "react";
import { postCriarTransacao } from "../service/post/postCriarTransacao.js";

export const useNovaTransacao = () => {
  const { control, handleSubmit, setValue, reset } = useForm();
  const [open, setOpen] = useState(false);
  setValue("tipo", "entrada");
  const [alerta, setAlert] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");

  function clickOpen() {
    setOpen(true);
  }
  function clickClose() {
    setOpen(false);
  }

  async function cadastrar(data) {
    if (
      data.nome == undefined ||
      data.valor == undefined ||
      data.categoria == undefined
    ) {
      setMensagem("Informações Faltando");
      setTipoMensagem("error");
      setAlert(true);
      return;
    }

    const response = await postCriarTransacao(data);
    const msg = response.mensagem ?? response.erro;
    setMensagem(msg);
    setAlert(true);
    if (msg == response.erro) {
      setTipoMensagem("error");
      return;
    }
    setTipoMensagem("success");
    reset();
  }

  return {
    control,
    open,
    alerta,
    mensagem,
    tipoMensagem,
    setAlert,
    setValue,
    clickClose,
    clickOpen,
    handleSubmit,
    cadastrar,
  };
};
