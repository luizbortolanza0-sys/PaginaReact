import { Button, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Zoom from '@mui/material/Zoom';
import { Theme } from "../themes/theme.js";
import { deleteTransacao } from "../service/delete/deleteTransacao";

export default function Delete({ id, setGatilho }) {
  async function deletarTransacao() {
    const response = await deleteTransacao(id, localStorage.getItem("token"));
    if (response.mensagem != undefined) {
      alert(response.mensagem);
      return;
    }
    alert(response.erro);
  }

  return (
    <Tooltip title="Delete" disableInteractive slots={{transition: Zoom}}>
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
    </Tooltip>
  );
}
