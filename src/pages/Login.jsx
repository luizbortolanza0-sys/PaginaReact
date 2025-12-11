import { Box, Button, Card } from "@mui/material";
import { Theme } from "../themes/theme.js";
import { TextBox } from "../Components/TextBox";

export default function Login() {
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
          borderRadius:"15px"
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            width: "80%",
            gap: "20px",
            paddingTop: "60px",
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
            <TextBox label={"Nome de Usuario"} name={"login"} />
            <TextBox label={"Senha"} name={"senha"} />
            <a
              href="/login"
              style={{
                textDecoration: "none",
                color: Theme.palette.primary.contrastText,
                fontSize: "12px",
              }}
            >
              Esqueceu a senha?
            </a>
          </Box>
          <Box sx={{
            display:"flex",
            gap:"10px",
            width:"100%"
          }}>
            <Button
            sx={{
              backgroundColor: Theme.palette.secundary.main,
              color: Theme.palette.primary.contrastText,
              width:"50%",
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
            href="/cadastro"
            sx={{
              backgroundColor: Theme.palette.secundary.light,
              color: Theme.palette.primary.contrastText,
              width:"50%",
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
    </Box>
  );
}
