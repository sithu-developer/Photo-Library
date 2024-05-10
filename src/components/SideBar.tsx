import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useRouter } from "next/router";

const SideBar = () => {
  const router = useRouter();
  const pageParth = router.pathname;
  const isAppPage = (pageParth === "/app");
  const isSignPage = pageParth.includes("/app/sign-page");

  if( isAppPage || isSignPage ) return null;
     return (
        <Box sx={{ display : "flex" , flexDirection : "column" , width : "fit-content" , borderRight : "0.1px solid #DFD0B8" , height : "100vh"  }}>
          <List>
            {icons.map(item => <ListItemButton key={item.id} onClick={() => router.push(`/app/${item.pageLink}`)} sx={{ p : "15px 5px"  , display : "flex" , flexDirection : "column" , justifyContent : "center" , alignItems : "center"}}>
              <ListItemIcon >
                < item.icon sx={{ fontSize : "30px" , ml : "13px"}}/>
              </ListItemIcon>
              <Typography sx={{ fontSize : "11px" , textAlign : "center"}}>{item.name}</Typography>
            </ListItemButton>)}
          </List>
        </Box>
      )
    }

export default SideBar;

interface Icon {
  id : number;
  icon : any;
  name : string;
  pageLink : string;
}
export const icons : Icon[] = [
  { 
    id : 1,
    icon : HomeIcon,
    name : "Home",
    pageLink : "home-page"
  },
  {
    id : 2,
    icon : CloudUploadIcon,
    name : "Upload",
    pageLink : "/"
  },
  {
    id : 3,
    icon : HomeIcon,
    name : "",
    pageLink : ""
  },
  {
    id : 4,
    icon : HomeIcon,
    name : "",
    pageLink : ""
  },
  {
    id : 5,
    icon : SettingsIcon,
    name : "Setting",
    pageLink : "setting-page"
  }
];