import { Box } from "@mui/material";
import CardSaldos from "./CardSaldos.jsx";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Theme } from "../themes/theme.js";
import { useContext } from "react";
import { HomeContext } from "../pages/Home.jsx";


export const InformacoesSaldo = () => {
  const { resumo, lastData } = useContext(HomeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: {xs:"150px", md:"190px"},
        borderRadius:{xs:"0px 8px 8px 0px", md:'0px'},
        justifyContent: "space-between",
        overflowX:{xs:"scroll", md:'auto'},
        gap:"20px",
        scrollbarWidth: "none"
      }}
    >
      <CardSaldos
        info={resumo.entradas}
        name="Entradas"
        tipo={"entrada"}
        data={lastData.lastEntrada}
        color={Theme.palette.primary.light}
        Icon={ArrowCircleUpIcon}
      />
      <CardSaldos
        info={resumo.saidas}
        name="Saidas"
        tipo={"saida"}
        data={lastData.lastSaida}
        color={Theme.palette.primary.negative}
        Icon={ArrowCircleDownIcon}
      />
      <CardSaldos
        info={resumo.total}
        tipo={"transação"}
        data={lastData.lastTotal}
        name="Total"
        color={Theme.palette.primary.contrastText}
        Icon={AttachMoneyIcon}
      />
    </Box>
  );
};
