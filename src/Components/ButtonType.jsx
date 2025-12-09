import { ArrowCircleDown, ArrowCircleUp } from "@mui/icons-material";
import { Button, Box } from "@mui/material";
import { Theme } from "../themes/theme.js";
import { useState } from "react";

function Buttons({ type, cor, Icon, onClick}) {
  const [focus, setFocus] = useState(false);
  let auxCor;

  if (focus && cor == Theme.palette.primary.negative) {
    auxCor = Theme.palette.secundary.negative;
  }
  if (focus && cor == Theme.palette.secundary.main) {
    auxCor = Theme.palette.primary.dark;
  }

  return (
    <Button
      onClick={onClick}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      variant="contained"
      sx={{
        height: "40px",
        width: "50%",
        backgroundColor: focus ? cor : Theme.palette.secundary.dark,
        color: Theme.palette.primary.contrastText,
        fontSize: "14px",
        fontWeight: "normal",
        textTransform: "none",
        "&:hover": {
          backgroundColor: focus ? auxCor : Theme.palette.primary.main,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon
          sx={{
            color: focus ? Theme.palette.primary.contrastText : cor,
          }}
        />{" "}
        <p style={{ paddingTop: "3px", paddingLeft: "2px" }}>{type}</p>
      </Box>
    </Button>
  );
}

export const ButtonType = () => {
  const [entrada,setEntrada] = useState(true);

  return (
    <>
      <Buttons
        onClick={() => setEntrada(true)}
        type={"Entrada"}
        cor={Theme.palette.secundary.main}
        Icon={ArrowCircleUp}
      />
      <Buttons
        onClick={()=> setEntrada(false)}
        type={"Saida"}
        cor={Theme.palette.primary.negative}
        Icon={ArrowCircleDown}
      />
    </>
  );
};
