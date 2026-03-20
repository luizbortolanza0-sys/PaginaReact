import { TextField } from "@mui/material";
import { Theme } from "../themes/theme.js";
import { Controller } from "react-hook-form";

export const TextBox = ({ label, name, type, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          onChange={(e) =>
            field.onChange(
              type === "number" ? Number(e.target.value) : e.target.value,
            )
          }
          value={field.value != undefined ? field.value : ""}
          type={type}
          label={label}
          variant="outlined"
          size="small"
          sx={{
            flexGrow: "1",
            height: "40.5px",
            backgroundColor: Theme.palette.background.header,
            borderRadius: "6px",
            "& input[type=number]::-webkit-inner-spin-button": {
              display: "none",
              WebkitAppearance: "none",
              margin: 0,
            },
            "& input[type=number]::-webkit-outer-spin-button": {
              display: "none",
              WebkitAppearance: "none",
              margin: 0,
            },
            "& input[type=number]": {
              MozAppearance: "textfield",
            },
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
      )}
    ></Controller>
  );
};
