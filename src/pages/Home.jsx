import { Stack, Box, Button} from "@mui/material";
import {Theme} from "../themes/theme.js"

function Home() {
  return (
    <Stack
      direction={"column"}
      sx={{
        height:"auto",
        width:"100%",
        backgroundImage: Theme.palette.background.body,
        overflow:"auto",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
      }}
    >
      <Stack sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start",
        flexDirection:"column",
        width:"70%",
        height:"auto",
        padding:"20px 0px 20px 0px"
      }}>    
        <Box sx={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          width:"100%"
        }}>
          <Box sx={{
            justifyContent:"center"
          }}>
            <img src="" alt="logo" />
            <p>Finance</p>
          </Box>
          <Button>Nova Transação</Button>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Home;
