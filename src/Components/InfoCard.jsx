import {Card} from "@mui/material"
import {Theme} from "../themes/theme.js"


export const InfoCard = ({descricao, preco, categoria, data, tipo})=>{
    if(!(tipo)){
        preco = "-" + preco
    }
    return(
        <Card sx={{width:"100%",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            height:"50px",
            fontSize:"14px",
            backgroundColor:Theme.palette.primary.main,
            color:Theme.palette.secundary.contrastText
        }}>
            <p style={{paddingLeft:"20px"}}>
                {descricao}
            </p>
            <p style={{
                color: tipo ? Theme.palette.primary.light : Theme.palette.primary.negative
            }}>
                R$ {preco}
            </p>
            <p style={{}}>
                {categoria}
            </p>
            <p style={{paddingRight:"20px"}}>
                {data}
            </p>
        </Card>
    );
}