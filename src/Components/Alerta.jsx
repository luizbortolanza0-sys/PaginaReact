import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";

export default function Alerta({mensagem, classe, aberto }) {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={classe}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {mensagem}
        </Alert>
      </Snackbar>
    </div>
  );
}
