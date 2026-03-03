import { Box, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';import { TextBox } from "./TextBox";
import { Theme } from "../themes/theme";
import { useForm } from "react-hook-form"

export const SearchBar = ({onChange, onClick}) => {
  
  const {handleSubmit, control, watch} = useForm();

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit((data)=>{
        onClick(data?.search);
      })}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        gap: "20px",
      }}
    >
      <TextBox 
      type={"text"}  
      label ={"Busque uma Transação"} 
      control ={control}
      name={"search"}
      />

      <Button
        type="submit"
        variant="contained"
        size="medium"
        disableElevation={true}
        sx={{
          backgroundColor: Theme.palette.background.header,
          border: "1px solid" + Theme.palette.primary.dark,
          color: Theme.palette.primary.dark,
          fontSize: "14px",
          padding: "6.75px 25px 6.75px 25px",
          textTransform: "none",
          "&:hover": {
            backgroundColor: Theme.palette.secundary.main,
            border: "1px solid " + Theme.palette.secundary.main,
            color: Theme.palette.primary.contrastText,
          },
        }}
      >
        <SearchIcon />
        <p style={{ paddingLeft: "3px" }}>Buscar</p>
      </Button>
    </Box>
  );
};
