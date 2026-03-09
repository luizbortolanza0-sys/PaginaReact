import { Box, Button, Card, Checkbox, Typography } from "@mui/material";
import { Theme } from "../themes/theme.js";
import { TextBox } from "../Components/TextBox";
import { useLogin } from "../hooks/useLogin.js";
import Alerta from "../Components/Alerta.jsx";


export default function Login() {

  const {form,
        senha,
        alerta,
        mensagem,
        tipoMensagem,
        setAlert,
        onClickCadastrar,
        handleChange,
        handleLogin} = useLogin();

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
          height: {xs:"40%", md:"60%"},
          width: { xs: "90%", md: "35%" },
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
        }}
      >
        <Box
          component={"form"}
          onSubmit={form.handleSubmit((data) => handleLogin(data))}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            width: "80%",
            gap: "20px",
            paddingBottom: "10%",
          }}
        >
          <h1 style={{ color: Theme.palette.primary.contrastText }}>Login</h1>
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
              control={form.control}
            />
            <TextBox
              type={senha}
              label={"Senha"}
              name={"senha"}
              control={form.control}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "20px",
                justifyContent: "space-between"
              }}
            >
              
              <Box 
              display={"flex"}
              alignItems={"center"}
              >
                <Checkbox
                  onChange={handleChange}
                  size="small"
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

              <Typography
                component={'a'}
                variant="caption"
                href="/"
                style={{
                  textDecoration: "none",
                  color: Theme.palette.primary.contrastText,
                  fontSize: "12px",
                }}
              >
                Esqueceu a senha?
              </Typography>
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
              type="submit"
              sx={{
                backgroundColor: Theme.palette.secundary.main,
                color: Theme.palette.primary.contrastText,
                width: "50%",
                paddingTop: "10px",
                paddingBottom: "10px",
                fontSize: "14px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: Theme.palette.primary.light,
                },
              }}
            >
              Entrar
            </Button>
            <Button
              onClick={onClickCadastrar}
              sx={{
                backgroundColor: Theme.palette.secundary.light,
                color: Theme.palette.primary.contrastText,
                width: "50%",
                paddingTop: "10px",
                paddingBottom: "10px",
                fontSize: "14px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: Theme.palette.secundary.dark,
                },
              }}
            >
              Criar Conta
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