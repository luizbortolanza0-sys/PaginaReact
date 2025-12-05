import { Button, Card, Dialog, Box } from "@mui/material";
import { TextBox } from "./TextBox.jsx";
import { Theme } from "../themes/theme.js";
import { useState } from "react";
import { ArrowCircleUp, ArrowCircleDown } from "@mui/icons-material";

export const NovaTransacao = () => {
  const [open, setOpen] = useState(false);
  function clickOpen() {
    setOpen(true);
  }
  function clickClose() {
    setOpen(false);
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
            height: "30rem",
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
              paddingTop: "80px",
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
              <TextBox label={"Descrição"} />
              <TextBox label={"Preço"} />
              <TextBox label={"Categoria"} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button>
                  Entrada <ArrowCircleUp />
                </Button>
                <Button>
                  Saida <ArrowCircleDown />
                </Button>
              </Box>
            </Box>
            <Button fullWidth="true">Cadastrar</Button>
          </Box>
          <Button
            onClick={clickClose}
            sx={{
              position: "absolute",
              alignSelf: "flex-end",
            }}
          >
            X
          </Button>
        </Card>
      </Dialog>
    </>
  );
};
