import {createTheme} from '@mui/system';

export const Theme = createTheme({
    palette:{
        primary:{
            main:"#323238ff" ,
            light:"#18926E",
            dark:"#015F43",
            contrastText:"#F5F5F5"
        },
        secundary:{
            main:"#148563ff",
            dark:"#1d1d20ff",
            contrastText:"#b6b4b4ff"
        },
        background:{
            body:"linear-gradient( to bottom, #141416 15% , #202024 15% 100%)",
            
        }
    }
    
});