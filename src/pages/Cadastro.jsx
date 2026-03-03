import { Box, Button, Card, Checkbox } from "@mui/material";
import { Theme } from "../themes/theme.js";
import { TextBox } from "../Components/TextBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCriarConta } from "../service/post/postCriarConta.js";
import { useForm } from "react-hook-form";
import Alerta from "../Components/Alerta.jsx";

export default function Cadastro() {
  
  const {control, handleSubmit, watch} = useForm();
  const [senha, setSenha] = useState("password");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState([]);
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
      senha: data.senha
    });
    
    const msg = response.mensagem == undefined ? response.data.erro : response.mensagem
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

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: Theme.palette.background.body,
      }}
    >
      <Card
        elevation={10}
        sx={{
          display: "flex",
          backgroundColor: Theme.palette.primary.main,
          height: "60%",
          width: "35%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
        }}
      >
        <Box
          component={"form"}
          onSubmit={handleSubmit((data)=> handleCadastro(data))}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            width: "80%",
            gap: "20px",
          }}
        >
          <h1 style={{ color: Theme.palette.primary.contrastText }}>
            Criar Conta
          </h1>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "100%",
            }}
          >
            <TextBox
              label={"Nome de Usuario"}
              name={"login"}
              control={control}
            />
            <TextBox
              type={senha}
              label={"Senha"}
              name={"senha"}
              control={control}
            />
            <TextBox
              type={senha}
              label={"Confirmar senha"}
              name={"senhaConfirmada"}
              control={control}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "20px",
              }}
            >
              <Checkbox
                onChange={handleChange}
                size="small"
                label="Teste"
                sx={{
                  color: Theme.palette.secundary.main,
                  width: "10%",
                }}
              />{" "}
              <p
                style={{
                  color: Theme.palette.primary.contrastText,
                  fontSize: "12px",
                }}
              >
                Exibir Senha
              </p>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              width: "100%",
            }}
          >
            <Button
              type={"submit"}
              sx={{
                backgroundColor: Theme.palette.secundary.main,
                color: Theme.palette.primary.contrastText,
                width: "100%",
                paddingTop: "10px",
                paddingBottom: "10px",
                fontSize: "14px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: Theme.palette.primary.light,
                },
              }}
            >
              Criar
            </Button>
          </Box>
        </Box>
      </Card>
      <Alerta
        mensagem={mensagem}
        classe={tipoMensagem}
        aberto={alerta}
        onClose={() => setAlert(false)}
      />
    </Box>
  );
}
