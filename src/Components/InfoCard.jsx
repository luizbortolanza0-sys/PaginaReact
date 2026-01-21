import { Card, Box, Typography } from "@mui/material";
import { Theme } from "../themes/theme.js";
import Delete from "./Delete.jsx";

export const InfoCard = ({
  descricao,
  preco,
  categoria,
  data,
  tipo,
  id,
  setGatilho,
}) => {
  if (!tipo) {
    preco = "-" + preco;
  }
  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "55px",
        fontSize: "14px",
        backgroundColor: Theme.palette.primary.main,
        color: Theme.palette.secundary.contrastText,
      }}
    >
      <Typography
        sx={{
          paddingLeft: "20px",
          fontSize: "14px",
        }}
      >
        {descricao}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: "25px",
          width: "70%",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            width: "1px",
            height: "1px",
            overflow: "visible",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: tipo
              ? Theme.palette.primary.light
              : Theme.palette.primary.negative,
          }}
        >
          R$ {preco}
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent:"center",
            fontSize: "14px",
            width: "1px",
            height: "1px",
            paddingLeft:"100px",
            overflow: "visible",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {categoria}
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            width: "1px",
            height: "1px",
            overflow: "visible",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {data}
        </Typography>

        <Delete setGatilho={setGatilho} id={id} />
      </Box>
    </Card>
  );
};
