import { Box, Button } from "@mui/material";
import { Search } from "@mui/icons-material";
import { TextBox } from "./TextBox";
import { Theme } from "../themes/theme";

export const SearchBar = () => {
  return(
    <Box
    sx={{
      display: "flex",
      alignItems: "center",
      width: "100%",
      gap: "20px",
    }}
  >
    <TextBox label={"Busque uma Transação"} />
    <Button
      variant="contained"
      size="medium"
      disableElevation={true}
      sx={{
        backgroundColor: Theme.palette.background.header,
        border:"1px solid" + Theme.palette.primary.dark,
        color: Theme.palette.primary.dark,
        fontSize: "14px",
        padding: "7px 25px 7px 25px",
        textTransform: "none",
        "&:hover": {
          backgroundColor: Theme.palette.secundary.main,
            border:"1px solid " + Theme.palette.secundary.main,
            color:Theme.palette.primary.contrastText

        },
      }}
    >
    <Search/><p style={{paddingLeft:"3px"}}>Buscar</p>
    </Button>
  </Box>
  );
};
