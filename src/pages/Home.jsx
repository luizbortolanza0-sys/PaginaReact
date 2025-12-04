import { Stack, Box, Button, Card } from "@mui/material";
import { Theme } from "../themes/theme.js";
import {
  AttachMoney,
  ArrowCircleUp,
  ArrowCircleDown,
} from "@mui/icons-material";
import logo from "../img/logo.png"

function Home() {
  function NomeEmpresa() {
    return <h1 style={{ fontSize: "20px", fontStyle: "normal" }}>Finance</h1>;
  }
  function CardSaldos({ info, name, Icon, color }) {
    let bgcolor = Theme.palette.primary.main;
    if (name == "Total") bgcolor = Theme.palette.primary.dark;

    return (
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "32%",
          height: "65%",
          justifyContent: "space-around",
          backgroundColor: bgcolor,
          color: Theme.palette.primary.contrastText,
        }}
      >
        <Box sx={{paddingTop:"30PX"}}>
          <h2
            style={{
              fontSize: Theme.typography.card.size,
              fontWeight:"normal",
              color: Theme.palette.secundary.contrastText,
            }}
          >
            {name}
          </h2>
          <p
            style={{
              fontSize: Theme.typography.card.sizePrice,
              fontWeight:"bold"
            }}
          >
            R$ {info}
          </p>
        </Box>
        <Icon
          sx={{
            color: color,
            paddingTop: "20px",
            fontSize:"30px"
          }}
        />
      </Card>
    );
  }

  function InformacoesSaldo() {
    return (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "180px",
          justifyContent: "space-between",
          overflow:"auto"
        }}
      >
        <CardSaldos
          info="19.000,00"
          name="Entradas"
          color={Theme.palette.primary.light}
          Icon={ArrowCircleUp}
        />
        <CardSaldos
          info="2.300,00"
          name="Saidas"
          color={Theme.palette.primary.negative}
          Icon={ArrowCircleDown}
        />
        <CardSaldos
          info="16.700,00"
          name="Total"
          color={Theme.palette.primary.contrastText}
          Icon={AttachMoney}
        />
      </Box>
    );
  }
  function Logo() {
    return <img src={logo} alt="logo" style={{
      height:"30px",
      width:"30xp"
    }}/>;
  }

  return (
    <Stack
      direction={"column"}
      className="containerPrincipal"
      sx={{
        height: "200vh",
        width: "100%",        
        backgroundColor: Theme.palette.background.body,
        flexDirection: "column",
      }}
    >
      <Stack
        sx={{
          height: "200px",
          width: "100%",
          backgroundColor: Theme.palette.background.header,
          alignItems: "center",
          flexDirection: "column",
          overflow:"visible",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            position:"relative",
            justifyContent: "flex-start",
            flexDirection: "column",
            width: "80%",
            top:"4rem",
          }}
        >
          <Box
            className="header"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              paddingBottom: Theme.typography.boxSpace.size,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems:"center",
                color: Theme.palette.primary.contrastText,
              }}
            >
              <Logo />
              <NomeEmpresa />
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: Theme.palette.secundary.main,
                color: Theme.palette.primary.contrastText,
                fontSize: "14px",
                textTransform: "none",
                "&:hover":{
                  backgroundColor: Theme.palette.primary.light
                }
              }}
            >
              Nova transação
            </Button>
          </Box>
          <InformacoesSaldo />
        </Stack>
      </Stack>




      <Box sx={{ p: 2, width: 300, position:"relative", top:"100px"}}>
      <Card
        sx={{
          p: 2,
          bgcolor: "#f5f5f5",
          borderRadius: 3,
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box sx={{ fontSize: 20, fontWeight: 600 }}>Finanças</Box>

        <Box sx={{ fontSize: 26, fontWeight: 700 }}>R$ 1.250,75</Box>

        <Box sx={{ fontSize: 14 }}>
          <strong>Receita:</strong> R$ 2.300,00
        </Box>

        <Box sx={{ fontSize: 14 }}>
          <strong>Despesa:</strong> R$ 1.049,25
        </Box>
      </Card>
    </Box>
      
    </Stack>
  );
}

export default Home;
