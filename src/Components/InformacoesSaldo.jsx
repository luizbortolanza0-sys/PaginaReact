import { Box, Card } from "@mui/material";
import {
  AttachMoney,
  ArrowCircleUp,
  ArrowCircleDown,
} from "@mui/icons-material";
import { Theme } from "../themes/theme.js";
import { useState, useEffect } from "react";

export const InformacoesSaldo = ({ lista }) => {
  const [valores, setValores] = useState({
    entrada: 0,
    saida: 0,
    total: 0,
  });

  useEffect(() => {
    let entradaTotal = 0;
    let saidaTotal = 0;

    lista.forEach((item) => {
      console.log("valor:", item.valor, "tipo:", typeof item.valor);
      if (item.tipo == "entrada") {
        entradaTotal += parseFloat(String(item.valor).replace(",", "."));
      }
      if (item.tipo == "saida") {
        saidaTotal += Math.abs(
          parseFloat(String(item.valor).replace(",", "."))
        );
      }
    });
    setValores({
      entrada: entradaTotal,
      saida: saidaTotal,
      total: entradaTotal - saidaTotal,
    });
  }, [lista]);

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
            R${" "}
            {info.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
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
        info={valores.entrada}
        name="Entradas"
        color={Theme.palette.primary.light}
        Icon={ArrowCircleUp}
      />
      <CardSaldos
        info={valores.saida}
        name="Saidas"
        color={Theme.palette.primary.negative}
        Icon={ArrowCircleDown}
      />
      <CardSaldos
        info={valores.total}
        name="Total"
        color={Theme.palette.primary.contrastText}
        Icon={AttachMoney}
      />
    </Box>
  );
};
