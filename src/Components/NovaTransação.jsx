import { Button, Card, Dialog, Box } from "@mui/material";
import { TextBox } from "./TextBox.jsx";
import { Theme } from "../themes/theme.js";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { ButtonType } from "./ButtonType.jsx";
import { postCriarTransacao } from "../service/post/postCriarTransacao.js";
import { useForm } from "react-hook-form";
import Alerta from "./Alerta.jsx";

export const NovaTransacao = ({ setGatilho }) => {

  const { control, handleSubmit, setValue, reset } = useForm();
  const [open, setOpen] = useState(false);
  setValue("tipo", "entrada");
  const [alerta, setAlert] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");

  function clickOpen() {
    setOpen(true);
  }
  function clickClose() {
    setOpen(false);
  }

  async function cadastrar(data) {

    console.log(data)

    if (data.nome == undefined || data.valor == undefined || data.categoria == undefined) {
      setMensagem("Informações Faltando");
      setTipoMensagem("error");
      setAlert(true);
      return;
    }

    const response = await postCriarTransacao(
      data,
      localStorage.getItem("token"),
    );
    const msg = response.mensagem ?? response.erro 
    setMensagem(msg);
    setAlert(true);
    if(msg == response.erro){
      setTipoMensagem("error");
      return;
    }
    setTipoMensagem("success");
    reset();
  }

  return (
    <>
      <Button
        onClick={clickOpen}
        variant="contained"
        size="large"
        sx={{
          backgroundColor: Theme.palette.secundary.main,
          color: Theme.palette.primary.contrastText,
          fontSize: "14px",
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
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "transparent",
              boxShadow: "none",
              borderRadius: "10px",
            },
          },
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "33rem",
            height: "28rem",
            alignItems: "center",
            color: Theme.palette.primary.contrastText,
            backgroundColor: Theme.palette.background.body,
          }}
        >
          <Box
            component={"form"}
            onSubmit={handleSubmit((data)=>{
                cadastrar(data);
                setGatilho(true);
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
            <CloseIcon/>
          </Button>
          <Alerta
            mensagem={mensagem}
            classe={tipoMensagem}
            aberto={alerta}
            onClose={() => setAlert(false)}
          />
        </Card>
      </Dialog>
    </>
  );
};
