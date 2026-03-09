import { Box } from "@mui/material";
import CardSaldos from "./CardSaldos.jsx";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Theme } from "../themes/theme.js";


export const InformacoesSaldo = ({ lista, ultimaTransacao }) => {

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
        tipo={"entrada"}
        data={ultimaTransacao.lastEntrada}
        color={Theme.palette.primary.light}
        Icon={ArrowCircleUpIcon}
      />
      <CardSaldos
        info={lista.saidas}
        name="Saidas"
        tipo={"saida"}
        data={ultimaTransacao.lastSaida}
        color={Theme.palette.primary.negative}
        Icon={ArrowCircleDownIcon}
      />
      <CardSaldos
        info={lista.total}
        tipo={"transação"}
        data={ultimaTransacao.lastTotal}
        name="Total"
        color={Theme.palette.primary.contrastText}
        Icon={AttachMoneyIcon}
      />
    </Box>
  );
};
