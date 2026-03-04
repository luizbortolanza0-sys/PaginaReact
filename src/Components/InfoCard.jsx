import { Card, Box, Typography } from "@mui/material";
import { Theme } from "../themes/theme.js";
import Delete from "./Delete.jsx";
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

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
        flexDirection: { xs: "column", md: "row" },
        flexWrap: { xs: "wrap", md: "nowrap" },
        alignItems: "center",
        justifyContent:"center",
        height: { xs: "175px", md: "55px" },
        backgroundColor: Theme.palette.primary.main,
        color: Theme.palette.secundary.contrastText,
      }}
    >


      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column", md: "row"
          },
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          width: "90%",
          height:"100%",
          gap:"25px"
        }}
      >
        <Box
          display={"flex"}
          flexDirection={{xs:"column", md:"row"}}
          alignItems={{xs:"flex-start", md:"center"}}
          justifyContent={"space-between"}
          width={"100%"}
        >
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            {descricao}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
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
        </Box>
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",

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
              overflow: "visible",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {data}
          </Typography>
          <Delete setGatilho={setGatilho} id={id} />
        </Box>
      </Box>
    </Card>
  );
};
