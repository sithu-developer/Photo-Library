import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"

const TopBar = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <img alt="logo" src="/logo.png" style={{ width : "100px" , height : "50px" , borderRadius : "5px" }} />
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