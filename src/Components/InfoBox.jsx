import { InfoCard } from "./InfoCard";
import { Box, Pagination } from "@mui/material";
import { Theme } from "../themes/theme.js";

export const InfoBox = () => {
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
      <InfoCard
        descricao={"Compra de Moveis"}
        preco={"10.200,00"}
        categoria={"Casa"}
        data={"20/10/2025"}
        tipo={false}
      />
      <InfoCard
        descricao={"Compra de Moveis"}
        preco={"10.200,00"}
        categoria={"Casa"}
        data={"20/10/2025"}
        tipo={true}
      />
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
