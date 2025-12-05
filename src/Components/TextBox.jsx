import { TextField } from "@mui/material";
import { Theme } from "../themes/theme.js";


export const TextBox = ({label}) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      size="small"
      
      sx={{
        flexGrow:"1",
        backgroundColor: Theme.palette.background.header,
        borderRadius: "6px",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: Theme.palette.background.header, // cor da borda normal
          },
          "&:hover fieldset": {
            borderColor: Theme.palette.background.body, // cor no hover
          },
          "&.Mui-focused fieldset": {
            borderColor: Theme.palette.primary.light, // cor quando focado
          },
        },
        "& .MuiInputLabel-root": {
          color: Theme.palette.secundary.contrastText,
            fontSize: "14px", // cor do label
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: Theme.palette.secundary.contrastText, // label focado
        },
        "& .MuiOutlinedInput-input": {
          color: Theme.palette.primary.contrastText,
        },
      }}
    />
  );
};
