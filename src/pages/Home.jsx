import { Stack } from "@mui/material";
import { Theme } from "../themes/theme.js";
import { SearchBar } from "../Components/SearchBar.jsx";
import { InfoBox } from "../Components/InfoBox.jsx";
import { UpperHeader } from "../Components/UpperHeader.jsx";
import { InformacoesSaldo } from "../Components/InformacoesSaldo.jsx";
import { useEffect, useState } from "react";
import { getTransacoes } from "../service/get/getTransacoes.js";

const MaxPaginas = 50;
const MaxPerPagina = 10;
localStorage.setItem("novaTransacao", true);
console.log(localStorage.getItem("novaTransacao"))

const aux = await getTransacoes(1, MaxPaginas, localStorage.getItem("token"));

function Home() {
  
  const [page, setPage] = useState(1);
  const [texto, setTexto] = useState("");
  
  useEffect(() => {
    async function fetchApi() {
      let trans = await getTransacoes(page, MaxPerPagina, localStorage.getItem("token"));
      setTransacoes(trans);
      setSearch(trans);
    }
    fetchApi();
    console.log(transacoes);
    
  },[page, localStorage.getItem("novaTransacao")]);
  const [transacoes, setTransacoes] = useState(aux);
  const [search, setSearch] = useState(transacoes);
  const [lista, setLista] = useState(transacoes.transacoes);

  

  function searchChange(name, value) {
    setTexto(value);
  }
  const changePage = (event, value)=>{
    setPage(value);
  }

  function searchGet() {
    if (texto.trim() === "") {
      setSearch(transacoes);
      return;
    }

    setSearch({
      ...search,
      transacoes: lista.filter((item) =>
        item.nome.toLowerCase().includes(texto.toLowerCase()),
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
            position: "relative",
            justifyContent: "flex-start",
            flexDirection: "column",
            width: "80%",
            top: "4rem",
          }}
        >
          <UpperHeader />
          <InformacoesSaldo lista={lista} />
        </Stack>
      </Stack>

      <Stack
        sx={{
          width: "80%",
          position: "relative",
          top: "100px",
        }}
      >
        <SearchBar
          onChange={searchChange}
          value={texto}
          onClick={() => searchGet()}
        />
        <InfoBox lista={search} page={page} onChange={changePage} />
      </Stack>
    </Stack>
  );
}

export default Home;
