import { Box, Button, Card, Checkbox } from "@mui/material";
import { Theme } from "../themes/theme.js";
import { TextBox } from "../Components/TextBox";
import { useState } from "react";

export default function Cadastro() {
  const [senha, setSenha] = useState("password");
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
          alignItems: "flex-start",
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
            paddingTop: "45px",
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
            <TextBox label={"Nome de Usuario"} name={"login"} />
            <TextBox type={senha} label={"Senha"} name={"senha"} />
            <TextBox
              type={senha}
              label={"Confirmar senha"}
              name={"senhaConfirmada"}
            />
            <Box sx={{
              display:"flex",
              alignItems:"center",
              height:"20px"
            }}>
              <Checkbox
                onChange={handleChange}
                size="small"
                label="Teste"
                sx={{
                  color: Theme.palette.secundary.main,
                  width: "10%",

                }}
              /> <p style={{
                color:Theme.palette.primary.contrastText,
                fontSize:"12px"
              }}>Exibir Senha</p>
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
              href="/home"
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
