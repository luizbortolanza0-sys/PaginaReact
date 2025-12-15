import { Stack } from "@mui/material";
import { Theme } from "../themes/theme.js";
import { SearchBar } from "../Components/SearchBar.jsx";
import { InfoBox } from "../Components/InfoBox.jsx";
import { UpperHeader } from "../Components/UpperHeader.jsx";
import { InformacoesSaldo } from "../Components/InformacoesSaldo.jsx";
import { useState } from "react";
import { data } from "../info/data.js";

function Home() {
  const [lista, setLista] = useState(data);
  const [search, setSearch] = useState(lista);
  const [texto, setTexto] = useState("");

  function addList(novaLista) {
    setLista((prev) => {
      const nova = [novaLista, ...prev];
      setSearch(nova);
      return nova;
    });
  }

  function searchChange(name , value) {
    console.log(value)
    setTexto(value);
  }

  function searchGet() {
    if (texto.trim() === "") {
      setSearch(lista);
      return;
    }

    setSearch(
    lista.filter(item =>
      item.nome.toLowerCase().includes(texto.toLowerCase())
    )
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
          <UpperHeader onNovaTransacao={addList} />
          <InformacoesSaldo lista={lista}  />
        </Stack>
      </Stack>

      <Stack
        sx={{
          width: "80%",
          position: "relative",
          top: "100px",
        }}
      >
        <SearchBar onChange={searchChange} value={texto} onClick={()=>searchGet()}/>
        <InfoBox lista={search} />
      </Stack>
    </Stack>
  );
}

export default Home;
