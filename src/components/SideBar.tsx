import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import ImageIcon from '@mui/icons-material/Image';

const SideBar = () => {
    return (
        <Box sx={{ display : "flex" , flexDirection : "column" , width : "fit-content" , borderRight : "0.1px solid #DFD0B8" , height : "100vh"  }}>
          <List>
            {icons.map(item => <ListItemButton sx={{ p : "15px 5px"  , display : "flex" , flexDirection : "column" , justifyContent : "center" , alignItems : "center"}}>
              <ListItemIcon >
                < item.icon sx={{ fontSize : "40px" , ml : "5px"}}/>
              </ListItemIcon>
              <Typography sx={{ fontSize : "15px"}}>{item.name}</Typography>
            </ListItemButton>)}
          </List>
        </Box>
      )
    }

export default SideBar;

export const icons = [
  { 
    id : 1,
    icon : HomeIcon,
    name : "Home"
  },
  {
    id : 2,
    icon : ImageIcon,
    name : "My Photo"
  },
  {
    id : 3,
    icon : HomeIcon
  },
  {
    id : 4,
    icon : HomeIcon
  },
  {
    id : 5,
    icon : SettingsIcon,
    name : "Setting"
  }
];