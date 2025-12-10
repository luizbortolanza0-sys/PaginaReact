import { Stack, Box, Card } from "@mui/material";
import { Theme } from "../themes/theme.js";
import { SearchBar } from "../Components/SearchBar.jsx";
import { InfoBox } from "../Components/InfoBox.jsx";
import { UpperHeader } from "../Components/UpperHeader.jsx";
import {
  AttachMoney,
  ArrowCircleUp,
  ArrowCircleDown,
} from "@mui/icons-material";
import { useState } from "react";
import { data } from "../info/data.js";

function Home() {
  const [lista,setLista] = useState(data);
  
  function addList(novaLista){
    setLista((prev) => [...prev, novaLista]);
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
        <Box
          sx={{
            paddingTop: "25px",
            display: "flex",
            gap: "18px",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              fontSize: Theme.typography.card.size,
              fontWeight: "normal",
              color: Theme.palette.secundary.contrastText,
            }}
          >
            {name}
          </h2>
          <p
            style={{
              fontSize: Theme.typography.card.sizePrice,
              fontWeight: "bold",
            }}
          >
            R$ {info}
          </p>
        </Box>
        <Icon
          sx={{
            color: color,
            paddingTop: "20px",
            fontSize: "30px",
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
          overflow: "auto",
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

  return (
    <Stack
      direction={"column"}
      className="containerPrincipal"
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: Theme.palette.background.body,
        position:"relative",
        flexDirection: "column",
        alignItems: "center",
                    paddingBottom:"150px"

      }}
    >
      <Stack
        sx={{
          height: "200px",
          width: "100%",
          backgroundColor: Theme.palette.background.header,
          alignItems: "center",
          flexDirection: "column",
          overflow: "visible",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            justifyContent: "flex-start",
            flexDirection: "column",
            width: "80%",
            top: "4rem",
          }}
        >
          <UpperHeader onNovaTransacao={addList} />
          <InformacoesSaldo />
        </Stack>

      </Stack>

      <Stack
        sx={{
          width: "80%",
          position: "relative",
          top: "100px",
        }}
      >
        <SearchBar />
        <InfoBox lista = {lista}/>
      </Stack>

    </Stack>
  );
}

export default Home;
