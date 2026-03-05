import { Box, Stack, Typography } from "@mui/material";
import { Theme } from "../themes/theme.js";
import { SearchBar } from "../Components/SearchBar.jsx";
import { InfoBox } from "../Components/InfoBox.jsx";
import { UpperHeader } from "../Components/UpperHeader.jsx";
import { InformacoesSaldo } from "../Components/InformacoesSaldo.jsx";
import { useEffect, useState } from "react";
import { getTransacoes } from "../service/get/getTransacoes.js";


const MaxPerPagina = 10;
const startFetch = await getTransacoes(1, 1, localStorage.getItem("token"))

function Home() {

  const [page, setPage] = useState(1);
  const [gatilho, setGatilho] = useState(false);
  useEffect(() => {
    async function fetchApi() {
      setGatilho(false);
      let trans = await getTransacoes(page, MaxPerPagina, localStorage.getItem("token"));
      let transTotal = await getTransacoes(1, trans.paginacao.total, localStorage.getItem("token"));
      setTransacoes(transTotal);
      setLista(transTotal);
      setSearch(trans);
    }
    fetchApi();

  }, [page, gatilho]);

  const [transacoes, setTransacoes] = useState(startFetch);
  const [search, setSearch] = useState(transacoes);
  const [lista, setLista] = useState(transacoes);
  const [lastData, setLastData] = useState({
    lastEntrada:"teste",
    lastSaida:"teste",
    lastTotal:"teste"
  })


  const changePage = (event, value) => {
    setPage(value);
  }

  

  const mostRecent = (date1, date2) => {
    return date1.getTime() > date2.getTime();
  }


  function searchGet(text) {
    if (text.trim() === "") {
      setGatilho(true);
      return;
    }

    setSearch({
      ...search,
      transacoes: lista.transacoes.filter((item) =>
        item.nome.toLowerCase().includes(text.toLowerCase()),
      ),
    }
    );
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
          <InformacoesSaldo lista={lista.resumo} ultimaTransacao={lastData} />
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

