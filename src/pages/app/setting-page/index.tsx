import { useAppSelector } from "@/store/hook";
import { Box, List, ListItemButton, ListItemIcon, TextField, Typography } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import { ListItems } from "@/components/SideBar";
import { useRouter } from "next/router";

const SettingPage = () => {
    const user = useAppSelector(store => store.user.item);
    const router = useRouter();

    if(!user) return <Typography>Please sign in</Typography>;

    return (
        <Box sx={{ p : "10px" , display : "flex" , flexDirection : "column" , justifyContent : "space-between" , alignItems : "center" , width : "100vw" , gap : "10px"}}>
            <Box sx={{ display : "flex" , alignItems : "center" , width : "400px"}}>
                <img alt="my profile" src="/defaultProfile.jpg" style={{ height : "100px" , width : "100px"}} />
                <Typography variant="h5">{user.name}</Typography>
            </Box>
            <List sx={{ width : "400px"}}>
                {settingButtonItems.map(item => <ListItemButton key={item.id} onClick={() => router.push(`/app/setting-page/${item.pageLink}`)}>
                  <ListItemIcon >
                    <item.icon />
                  </ListItemIcon>
                  <Typography >My Profile</Typography>
                </ListItemButton>
                )}
                <ListItemButton >
                  <ListItemIcon >
                    <HomeIcon />
                  </ListItemIcon>
                  <Typography >Sign-out</Typography>
                </ListItemButton>
            </List> 
            
        </Box>
    )
} 

export default SettingPage;


export const settingButtonItems : ListItems[] = [
    {
        id : 1,
        icon : HomeIcon,
        name : "My Profile",
        pageLink : "my-profile"
    },
    {
        id : 2,
        icon : HomeIcon,
        name : "Sign out",
        pageLink : ""
    },
]