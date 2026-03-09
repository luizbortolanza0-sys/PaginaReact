import { Card, Typography, Box } from '@mui/material'
import { Theme } from "../themes/theme.js";

export default function CardSaldos({ info, name, Icon, color, data, tipo }) {
    
    let bgcolor = Theme.palette.primary.main;

    if (name == "Total") bgcolor = Theme.palette.primary.dark;
    
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril",
        "Maio", "Junho", "Julho", "Agosto",
        "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "row",
                width: { xs: "280px", md: "32%" },
                height: { xs: "150px", md: "65%" },
                flexShrink: "0",
                justifyContent: "space-around",
                backgroundColor: bgcolor,
                color: Theme.palette.primary.contrastText,
            }}
        >
            <Box
                sx={{
                    paddingTop: "25px",
                    display: "flex",
                    gap: "18px",
                    flexDirection: "column",
                }}
            >
                <h2
                    style={{
                        fontSize: Theme.typography.card.size,
                        fontWeight: "normal",
                        color: Theme.palette.secundary.contrastText,
                    }}
                >
                    {name}
                </h2>
                <p
                    style={{
                        fontSize: Theme.typography.card.sizePrice,
                        fontWeight: "bold",
                    }}
                >
                    R${" "}
                    {info.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}
                </p>
                <Typography variant={"caption"} color={Theme.palette.secundary.contrastText} display={{ xs: "block", md: 'none' }}>Ultima {tipo} em {new Date(data).getDate()} de {meses[new Date(data).getMonth()]}</Typography>
            </Box>
            <Icon
                sx={{
                    color: color,
                    paddingTop: "20px",
                    fontSize: "30px",
                }}
            />
        </Card>
    );
}


