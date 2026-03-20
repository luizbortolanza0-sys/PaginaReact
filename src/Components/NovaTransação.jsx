import { Button, Card, Dialog, Box } from "@mui/material";
import { TextBox } from "./TextBox.jsx";
import { Theme } from "../themes/theme.js";
import { useNovaTransacao } from "../hooks/useNovaTransacao.js";
import CloseIcon from "@mui/icons-material/Close";
import { ButtonType } from "./ButtonType.jsx";
import Alerta from "./Alerta.jsx";
import { useHomeContext } from "../hooks/useHomeContext.js";

export const NovaTransacao = () => {
  const {
    control,
    open,
    alerta,
    mensagem,
    tipoMensagem,
    setAlert,
    setValue,
    clickClose,
    clickOpen,
    handleSubmit,
    cadastrar,
  } = useNovaTransacao();

  const { setGatilho } = useHomeContext();

  return (
    <Box>
      <Button
        onClick={clickOpen}
        variant="contained"
        size="large"
        sx={{
          backgroundColor: Theme.palette.secundary.main,
          color: Theme.palette.primary.contrastText,
          py: "7px",
          px: "10px",
          fontSize: { xs: "10.5px", sm: "14px" },
          textTransform: "none",
          "&:hover": {
            backgroundColor: Theme.palette.primary.light,
          },
        }}
      >
        Nova transação
      </Button>
      <Dialog
        open={open}
        fullScreen
        slotProps={{
          paper: {
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "flex-end", md: "center" },
              backgroundColor: "transparent",
              boxShadow: "none",
              borderRadius: "10px",
            },
          },
        }}
      >
        <Card
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", md: "40%" },
            height: { xs: "58%", md: "70%" },
            alignItems: "center",
            color: Theme.palette.primary.contrastText,
            backgroundColor: Theme.palette.background.body,
          }}
        >
          <Box
            component={"form"}
            onSubmit={handleSubmit((data) => {
              cadastrar(data);
              setGatilho((prev) => !prev);
            })}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "35px",
              paddingTop: "50px",
              width: "80%",
            }}
          >
            <h3 style={{ fontWeight: "normal" }}>Nova Transação</h3>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <TextBox
                type={"text"}
                label={"Descrição"}
                name="nome"
                control={control}
              />
              <TextBox
                type={"number"}
                label={"Preço"}
                name="valor"
                control={control}
              />
              <TextBox
                type={"text"}
                label={"Categoria"}
                name={"categoria"}
                control={control}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <ButtonType onChange={setValue} />
              </Box>
            </Box>
            <Button
              type="submit"
              fullWidth="true"
              sx={{
                backgroundColor: Theme.palette.secundary.main,
                color: Theme.palette.primary.contrastText,
                paddingTop: "10px",
                paddingBottom: "10px",
                fontSize: "14px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: Theme.palette.primary.light,
                },
              }}
            >
              Cadastrar
            </Button>
          </Box>
          <Button
            onClick={clickClose}
            sx={{
              position: "absolute",
              alignSelf: "flex-end",
              color: Theme.palette.secundary.contrastText,
              top: "18px",
            }}
          >
            <CloseIcon />
          </Button>
          <Alerta
            mensagem={mensagem}
            classe={tipoMensagem}
            aberto={alerta}
            onClose={() => setAlert(false)}
          />
        </Card>
      </Dialog>
    </Box>
  );
};
