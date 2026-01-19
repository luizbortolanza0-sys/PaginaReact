import { Box, Button, Card, Checkbox } from "@mui/material";
import { Theme } from "../themes/theme.js";
import { TextBox } from "../Components/TextBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postCriarConta } from "../service/post/postCriarConta.js";


export default function Cadastro() {
  const [senha, setSenha] = useState("password");
  const [login,setLogin] = useState([]);
  const [confirmacaoSenha, setConfirmacaoSenha] = useState([]);
  const navigate = useNavigate(); 

  async function handleClick() {
    if(login.senha !== confirmacaoSenha.senhaConfirmada){
      alert('as duas senhas nao estao iguais!');
      return;
    }
    const response = await postCriarConta(login);
    if(response.status == 200){
      console.log(response.mensagem);
      navigate('/');
    }
    if(response.status == 400){
      alert(response.data.erro);
    }
    if(response.status == 500){
      alert(response.data.erro);
    }
  }

  function onChange(name, value){
    setLogin({
      ...login,
      [name]:value,
    });
  }
  function onChangeConfimacao(name, value){
    setConfirmacaoSenha({
      ...login,
      [name]:value
    });
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
            value={login.login}
            onChange={onChange}
            />
            <TextBox 
            type={senha} 
            label={"Senha"} 
            name={"senha"}
            value={login.senha}
            onChange={onChange}
            />
            <TextBox
              type={senha}
              label={"Confirmar senha"}
              name={"senhaConfirmada"}
              value={confirmacaoSenha.senhaConfirmada}
              onChange={onChangeConfimacao}
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
              onClick={handleClick}
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
    </Box>
  );
}
