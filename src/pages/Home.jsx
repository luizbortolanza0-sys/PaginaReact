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
  

  function addList(novaLista) {
    setLista((prev) => [novaLista, ...prev]);
    setSearch(lista);
  }
  function searchGet(){

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
          <InformacoesSaldo lista={lista}/>
        </Stack>
      </Stack>

      <Stack
        sx={{
          width: "80%",
          position: "relative",
          top: "100px",
        }}
      >
        <SearchBar  />
        <InfoBox lista={lista} />
      </Stack>
    </Stack>
  );
}

export default Home;
