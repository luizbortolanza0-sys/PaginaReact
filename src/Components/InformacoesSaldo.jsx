import { Box } from "@mui/material";
import CardSaldos from "./CardSaldos.jsx";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Theme } from "../themes/theme.js";
import { useHomeContext } from "../hooks/useHomeContext.js";

export const InformacoesSaldo = () => {
  const { resumo, lastData } = useHomeContext();
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: { xs: "150px", md: "190px" },
        borderRadius: { xs: "0px 8px 8px 0px", md: "0px" },
        justifyContent: "space-between",
        overflowX: { xs: "scroll", md: "auto" },
        gap: "20px",
        scrollbarWidth: { xs: "thin", md: "none" },
        scrollbarColor: "#64748b",
        "&::-webkit-scrollbar": {
          width: "6px",
          height: "6px",
        },

        "&::-webkit-scrollbar-track": {
          display: "none",
        },

        "&::-webkit-scrollbar-track:hover": {
          display: "none",
        },

        "&::-webkit-scrollbar-track:active": {
          display: "none",
        },

        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#64748b",
          borderRadius: "3px",
          minHeight: "40px",
        },

        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#475569",
        },

        "&::-webkit-scrollbar-thumb:active": {
          backgroundColor: "#334155",
        },

        "&::-webkit-scrollbar-button": {
          display: "none",
          width: 0,
          height: 0,
        },
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
