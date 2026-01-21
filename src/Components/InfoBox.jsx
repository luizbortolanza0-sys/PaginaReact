import { Box, Pagination } from "@mui/material";
import { Theme } from "../themes/theme.js";
import { ItemMap } from "./ItemMap.jsx";

export const InfoBox = ({lista, page, onChange, setGatilho}) => {

  return (
    <Box
      sx={{
        paddingTop: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <ItemMap lista={lista.transacoes} setGatilho={setGatilho}></ItemMap>


      <Pagination
        shape="rounded"
        page={page}
        onChange={onChange}
        count={lista.paginacao.totalPaginas}
        sx={{
          paddingTop: "20px",
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: Theme.palette.primary.light,
            color: Theme.palette.primary.contrastText,
          },
          "& .MuiPaginationItem-root": {
            backgroundColor: Theme.palette.primary.main,
            color: Theme.palette.primary.contrastText,
          },
          "& .MuiPaginationItem-previousNext": {
            backgroundColor: "transparent",
            color: Theme.palette.primary.light,
            "&:disabled": {
              color: Theme.palette.primary.main,
            },
          },
        }}
      />
    </Box>
  );
};
