import { Button, Card, Dialog, Box } from "@mui/material";
import { TextBox } from "./TextBox.jsx";
import { Theme } from "../themes/theme.js";
import { useState } from "react";
import { Close } from "@mui/icons-material";
import { ButtonType } from "./ButtonType.jsx";

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
              <TextBox label={"Descrição"} />
              <TextBox label={"Preço"} />
              <TextBox label={"Categoria"} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <ButtonType />
              </Box>
            </Box>
            <Button fullWidth="true" sx={{
              backgroundColor: Theme.palette.secundary.main,
              color: Theme.palette.primary.contrastText,
              paddingTop:"10px",
              paddingBottom:"10px",
              fontSize: "14px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: Theme.palette.primary.light,
              },
            }}>
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
        </Card>
      </Dialog>
    </>
  );
};
