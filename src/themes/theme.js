import {createTheme} from '@mui/system';

export const Theme = createTheme({
    palette:{
        primary:{
            main:"#38383aff" ,
            light:"#18926E",
            negative:"#E52E4D",
            dark:"#015F43",
            contrastText:"#F5F5F5"
        },
        secundary:{
            main:"#148563ff",
            dark:"#1d1d20ff",
            contrastText:"#b1b1b1b9"
        },
        background:{
            body:"#202024",
            header:"#141416"
        }
    },
    typography:{
        boxSpace:{
            size:"30px",
        },
        card:{
            size:"14px",
            sizePrice:"24px",
            sizeLine:"160%"
        }
    }
});