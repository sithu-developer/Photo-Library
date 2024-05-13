import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Box, List, ListItemButton, ListItemIcon, Typography } from "@mui/material"
import { ListItems } from "@/components/SideBar";
import { useRouter } from "next/router";
import { removeUser } from "@/store/slices/userSlice";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

const SettingPage = () => {
    const user = useAppSelector(store => store.user.item);
    const dispatch = useAppDispatch();
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
                  <Typography >{item.name}</Typography>
                </ListItemButton>
                )}

                <ListItemButton onClick={() => {
                  dispatch(removeUser());
                  router.push("/app");
                }} >
                  <ListItemIcon >
                    <ExitToAppOutlinedIcon />
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
        icon : AccountCircleOutlinedIcon,
        name : "Edit Profile",
        pageLink : "edit-profile"
    },
    {
        id : 2,
        icon : KeyOutlinedIcon,
        name : "Password",
        pageLink : "password"
    },
]