import { Box, ListItemButton, ListItemIcon, Paper, Typography } from "@mui/material"
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';


const AccountPage = () => {
    return (
        <Box sx={{ display : "flex" , flexDirection : "column" , alignItems : "center" , width : "100vw" , p : "10px" , gap : "30px" , pt : "40px"}}>
            <Typography variant="h5">Change Account Setting</Typography>
            <Box sx={{ display : "flex" , flexDirection : "column" , gap : "15px"}}>
                {accountItems.map(item => <Paper key={item.id} elevation={2} sx={{ display : "flex" , justifyContent : "space-between" , p : "10px 30px" , gap : "30px" , cursor : "pointer" }} >
                    <item.icon />
                    <Typography >{item.name}</Typography>
                </Paper>
                )}
                
            </Box>
        </Box>
    )
}

export default AccountPage;

interface AccountItem {
    id : number;
    icon : any;
    name : string;
}

const accountItems : AccountItem[] = [
    {
        id : 1,
        icon : AlternateEmailOutlinedIcon,
        name : "Change Email"
    },
    {
        id : 2,
        icon : KeyOutlinedIcon,
        name : "Change password"
    },
]
