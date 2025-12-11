import { Box, Pagination } from "@mui/material";
import { Theme } from "../themes/theme.js";
import { ItemMap } from "./ItemMap.jsx";

export const InfoBox = ({lista}) => {
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
      <ItemMap lista={lista}></ItemMap>


      <Pagination
        shape="rounded"
        count={3}
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
