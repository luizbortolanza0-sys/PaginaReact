import { Card, Box, Typography } from "@mui/material";
import { Theme } from "../themes/theme.js";
import Delete from "./Delete.jsx";
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
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
  return (
    <Card
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        flexWrap: { xs: "wrap", md: "nowrap" },
        alignItems: "center",
        justifyContent:"center",
        height: { xs: "155px", md: "55px" },
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
          width: {xs:'85%', md:"90%"},
          height:"100%",
          gap:"12px"
        }}
      >
        <Box
          display={"flex"}
          flexDirection={{xs:"column", md:"row"}}
          alignItems={{xs:"flex-start", md:"center"}}
          justifyContent={"space-between"}
          width={"100%"}
          gap={"5px"}
        >

        <Typography fontSize={"15px"} fontWeight={"bold"} color={{xs:Theme.palette.primary.contrastText, md:Theme.palette.secundary.contrastText}}>
            {descricao}
          </Typography>

          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: {xs:"20px", md:"15px"},
              overflow: "visible",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontWeight:"bold",
              color: tipo
                ? Theme.palette.primary.light
                : Theme.palette.primary.negative,
            }}
          >
            {tipo? "R$ " + preco: "-R$ "+preco }
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
              fontSize: "15px",

              overflow: "visible",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <LabelOutlinedIcon sx={{
              display:{xs:'block', md:"none"},
              height:"20px"
            }}/>{categoria}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "15px",
              overflow: "visible",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <CalendarTodayIcon sx={{
              display:{xs:'block', md:"none"},
              height:"17px"
            }}/>{data}
          </Typography>
          <Delete setGatilho={setGatilho} id={id} />
        </Box>
      </Box>
    </Card>
  );
};
