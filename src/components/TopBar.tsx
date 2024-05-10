import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import Image from "next/image";

const TopBar = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Image alt="logo" src={"/logo.png"} width={100} height={45} style={{ borderRadius : "15px"}} />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Photo Library
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default TopBar;