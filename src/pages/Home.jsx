import {Grid} from "@mui/material";
import {theme} from "../styles/theme.jsx"

function Home(){
    return(
        <Grid sx={{
            height:"100vh",
            backgroundColor:theme.bg.primary
        }} direction="row" container  spacing={1}>
            <Grid item size={{ xs: 12, md: 2 }} sx={{
                border:"2px solid black"
            }} >
                <p>xs=6 md=6</p>
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }} sx={{
                border:"2px solid black"
            }}>
                <p>xs=6 md=6</p>
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }} sx={{
                border:"2px solid black"
            }}>
                <p>xs=6 md=3</p>
            </Grid>
        </Grid>
    );
}

export default Home;