import { Box, Stack, Typography } from "@mui/material";
import { Theme } from "../themes/theme.js";
import { SearchBar } from "../Components/SearchBar.jsx";
import { InfoBox } from "../Components/InfoBox.jsx";
import { UpperHeader } from "../Components/UpperHeader.jsx";
import { InformacoesSaldo } from "../Components/InformacoesSaldo.jsx";
import useHome from "../hooks/useHome.js";


const MaxPerPagina = 10;

function Home() {

  const {
    page,
    search,
    lista,
    lastData,
    setGatilho,
    searchGet,
    changePage
  } = useHome(MaxPerPagina);

  if (!lista) {
    return <Box
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      color={Theme.palette.primary.contrastText}>Carregando...</Box>
  }

  return (
    <Stack
      direction={"column"}
      className="containerPrincipal"
      sx={{
        height: "100%",
        width: "100%",
        backgroundColor: Theme.palette.background.body,
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "150px",
      }}
    >
      <Stack
        sx={{
          height: "200px",
          width: "100%",
          backgroundColor: Theme.palette.background.header,
          alignItems: "center",
          flexDirection: "column",
          overflow: "visible",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
            overflow: "visible",
            position: "relative",
            justifyContent: "flex-start",
            flexDirection: "column",
            width: { xs: "90%", md: "80%" },
            top: "4rem",
          }}
        >
          <UpperHeader setGatilho={setGatilho} />
          <InformacoesSaldo lista={lista?.resumo} ultimaTransacao={lastData} />
        </Stack>
      </Stack>

      <Stack
        gap={2}
        sx={{
          width: { xs: "90%", md: "80%" },
          position: "relative",
          top: "100px",

        }}
      >
        <Box
          width={"100%"}
          display={{ xs: "flex", md: "none" }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            color={Theme.palette.primary.contrastText}
          >Transacoes</Typography>
          <Typography
            variant="caption"
            color={Theme.palette.secundary.contrastText}
          >{lista.paginacao.total} itens</Typography>
        </Box>
        <SearchBar
          onClick={(data) => searchGet(data)}
        />
        <InfoBox lista={search} page={page} onChange={changePage} setGatilho={setGatilho} />
      </Stack>
    </Stack>
  );
}

export default Home;