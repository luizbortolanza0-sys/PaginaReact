import { TextField } from "@mui/material";
import { Theme } from "../themes/theme.js";
import {useState} from "react";


export const TextBox = ({ label, name }) => {


  return (
    <TextField
      name={name}
      onChange={(e) => onChange(nome, e.target.value)}
      label={label}
      variant="outlined"
      size="small"
      sx={{
        flexGrow: "1",
        height:"40.5px",
        backgroundColor: Theme.palette.background.header,
        borderRadius: "6px",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: Theme.palette.background.header, 
          },
          "&:hover fieldset": {
            borderColor: Theme.palette.background.body,
          },
          "&.Mui-focused fieldset": {
            borderColor: Theme.palette.primary.light, 
          },
        },
        "& .MuiInputLabel-root": {
          color: Theme.palette.secundary.contrastText,
          fontSize: "14px", 
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: Theme.palette.secundary.contrastText,
          fontSize: "14px",
        },
        "& .MuiOutlinedInput-input": {
          color: Theme.palette.primary.contrastText,
        },
      }}
    />
  );
};
