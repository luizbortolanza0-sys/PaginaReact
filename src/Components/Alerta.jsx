import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Alerta({ mensagem, classe, aberto, onClose }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    onClose();
  };

  return (
    <Snackbar
      open={aberto}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={classe}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {mensagem}
      </Alert>
    </Snackbar>
  );
}
