import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCriarConta } from "../service/post/postCriarConta.js";
import { useForm } from "react-hook-form";

export const useCadastro = () => {
  const form = useForm();
  const [senha, setSenha] = useState("password");
  const [alerta, setAlert] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");
  const navigate = useNavigate();

  async function handleCadastro(data) {
    if (data.senha !== data.senhaConfirmada) {
      setMensagem("As duas senhas nao estao iguais!");
      setAlert(true);
      setTipoMensagem("error");
      return;
    }
    const response = await postCriarConta({
      login: data.login,
      senha: data.senha,
    });

    const msg =
      response.mensagem == undefined ? response.data.erro : response.mensagem;
    setMensagem(msg);
    setAlert(true);
    if (response.status == 400) {
      setTipoMensagem("error");
      return;
    }
    setTipoMensagem("success");
    setTimeout(() => {
      navigate("/");
    }, 700);
  }

  function handleChange() {
    let aux = senha;
    if (aux == "password") {
      setSenha("text");
      return;
    }
    if (aux == "text") {
      setSenha("password");
    }
  }

  return {
    form,
    senha,
    alerta,
    mensagem,
    tipoMensagem,
    handleCadastro,
    handleChange,
  };
};
