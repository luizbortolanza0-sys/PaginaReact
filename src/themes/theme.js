import { createTheme } from "@mui/system";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#323238",
      light: "#18926E",
      negative: "#E52E4D",
      dark: "#015F43",
      contrastText: "#E1e1e6",
    },
    secundary: {
      main: "#148563ff",
      light:"#44444cff",
      dark: "#1d1d20ff",
      contrastText: "#C4C4CC",
      negative: "#db1f3eff",
    },
    background: {
      body: "#202024",
      header: "#141416",
    },
  },
  typography: {
    boxSpace: {
      size: "30px",
    },
    card: {
      size: "14px",
      sizePrice: "24px",
      sizeLine: "160%",
    },
  },
});
