import { Button, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Zoom from "@mui/material/Zoom";
import { Theme } from "../themes/theme.js";
import { useDelete } from "../hooks/useDelete.js";
import Alerta from "./Alerta.jsx";

export default function Delete({ id, setGatilho }) {

  const { 
    alerta,
    mensagem,
    tipoMensagem,
    setAlert,
    deletarTransacao } = useDelete(id);

  return (
    <Tooltip title="Delete" disableInteractive slots={{ transition: Zoom }}>
      <Button
        onClick={() => {
          setGatilho(prev => !prev);
          deletarTransacao();
        }}
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
