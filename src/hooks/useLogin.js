import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../service/post/postLogin.js";
import { useForm } from "react-hook-form";

export const useLogin = () => {
  const form = useForm();
  const [senha, setSenha] = useState("password");
  const [alerta, setAlert] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");
  const navigate = useNavigate();

  async function handleLogin(data) {
    const response = await postLogin(data);
    let msg = response.data.erro ?? response.data.mensagem;
    setMensagem(msg);
    setAlert(true);
    if (msg == response.data.erro) {
      setTipoMensagem("error");
      return;
    }
    setTipoMensagem("success");
    setTimeout(() => {
      navigate("/home");
    }, 700);
  }

  function onClickCadastrar() {
    navigate("/cadastro");
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
    setAlert,
    onClickCadastrar,
    handleChange,
    handleLogin,
  };
};
