import { Box } from "@mui/material";
import { NovaTransacao } from "../Components/NovaTransação.jsx";
import logo from "../img/logo.png";
import { Theme } from "../themes/theme.js";

export const UpperHeader = ({onNovaTransacao}) => {
  function NomeEmpresa() {
    return <h1 style={{ fontSize: "20px", fontStyle: "normal" }}>Finance</h1>;
  }

  function Logo() {
    return (
      <img
        src={logo}
        alt="logo"
        style={{
          height: "30px",
          width: "30xp",
        }}
      />
    );
  }

  return (
    <Box
      className="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingBottom: Theme.typography.boxSpace.size,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          color: Theme.palette.primary.contrastText,
        }}
      >
        <Logo />
        <NomeEmpresa />
      </Box>
      <NovaTransacao onNovaTransacao={onNovaTransacao}/>
    </Box>
  );
};
