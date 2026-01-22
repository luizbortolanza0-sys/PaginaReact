import { Button, Card, Dialog, Box } from "@mui/material";
import { TextBox } from "./TextBox.jsx";
import { Theme } from "../themes/theme.js";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { ButtonType } from "./ButtonType.jsx";
import { postCriarTransacao } from "../service/post/postCriarTransacao.js";
import Alerta from "./Alerta.jsx";

export const NovaTransacao = ({ setGatilho }) => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(true);
  const [form, setForm] = useState([]);
  const [alerta, setAlert] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tipoMensagem, setTipoMensagem] = useState("");

  function clickOpen() {
    setOpen(true);
  }
  function clickClose() {
    setOpen(false);
  }
  function pegarMudanca(name, valor) {
    setForm({
      ...form,
      [name]: valor,
    });
  }

  async function cadastrar() {
    if (form.name === "" || form.valor === "" || form.categoria === "") {
      setMensagem("Informações Faltando");
      setTipoMensagem("error");
      setAlert(true);
      return;
    }
      
    const novaTransacao = {
      ...form,
      valor: Number.parseFloat(form.valor),
      tipo: type ? "entrada" : "saida",
    };

    const response = await postCriarTransacao(
      novaTransacao,
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
    setForm({
      nome: "",
      valor: 0,
      categoria: "",
    });
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
                value={form.nome}
                name="nome"
                onChange={pegarMudanca}
              />
              <TextBox
                type={"number"}
                label={"Preço"}
                value={Number.parseFloat(form.valor)}
                name="valor"
                onChange={pegarMudanca}
              />
              <TextBox
                type={"text"}
                label={"Categoria"}
                value={form.categoria}
                name={"categoria"}
                onChange={pegarMudanca}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <ButtonType onChange={setType} />
              </Box>
            </Box>
            <Button
              value={true}
              onClick={(e) => {
                setGatilho(e.target.value);
                cadastrar();
              }}
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
            <Close />
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
