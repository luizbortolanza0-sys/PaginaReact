import { Box, Card, Typography } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Theme } from "../themes/theme.js";


export const InformacoesSaldo = ({ lista, ultimaTransacao }) => {

  function CardSaldos({ info, name, Icon, color, data }) {
    let bgcolor = Theme.palette.primary.main;
    if (name == "Total") bgcolor = Theme.palette.primary.dark;

    return (
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          width: {xs:"250px", md:"32%" },
          height: {xs:"150px", md:"65%" },
          flexShrink:"0",
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
            R${" "}
            {info.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <Typography display={{xs:"block", md:'none'}}>{data}</Typography>
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

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "180px",
        justifyContent: "space-between",
        overflowX:{xs:"scroll", md:'auto'},
        gap:"20px",
        scrollbarWidth: "none"
      }}
    >
      <CardSaldos
        info={lista.entradas}
        name="Entradas"
        data={ultimaTransacao.lastEntrada}
        color={Theme.palette.primary.light}
        Icon={ArrowCircleUpIcon}
      />
      <CardSaldos
        info={lista.saidas}
        name="Saidas"
        data={ultimaTransacao.lastSaida}
        color={Theme.palette.primary.negative}
        Icon={ArrowCircleDownIcon}
      />
      <CardSaldos
        info={lista.total}
        data={ultimaTransacao.lastTotal}
        name="Total"
        color={Theme.palette.primary.contrastText}
        Icon={AttachMoneyIcon}
      />
    </Box>
  );
};
