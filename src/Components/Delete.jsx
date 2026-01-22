import { Button, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Zoom from "@mui/material/Zoom";
import { Theme } from "../themes/theme.js";
import { deleteTransacao } from "../service/delete/deleteTransacao";
import { useState } from "react";
import Alerta from "./Alerta.jsx";

export default function Delete({ id, setGatilho }) {
  const [alerta, setAlert] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");

  async function deletarTransacao() {
    const response = await deleteTransacao(id, localStorage.getItem("token"));
    const msg = response.mensagem ?? response.erro 
    setMensagem(msg);
    setAlert(true);
    if(msg == response.erro){
      setTipoMensagem("error");
      return;
    }
    setTipoMensagem("success");
    
  }

  return (
    <Tooltip title="Delete" disableInteractive slots={{ transition: Zoom }}>
      <Button
        onClick={(e) => {
          setGatilho(e.target.value);
          deletarTransacao();
        }}
        value={true}
        sx={{
          minWidth: 0,
          width: 32,
          height: 32,
          padding: 0,
          borderRadius: "50%",
          color: Theme.palette.primary.negative,

          "&:hover": {
            backgroundColor: Theme.palette.secundary.light,
          },
        }}
      >
        <DeleteIcon />
      </Button>
      <Alerta
        mensagem={mensagem}
        classe={tipoMensagem}
        aberto={alerta}
        onClose={() => setAlert(false)}
      />
    </Tooltip>
  );
}
