import { Box, Paper, TextField, Typography } from "@mui/material"

const SignInPage = () => {
    return (
        <Box sx={{ display : "flex" , justifyContent : "center" , alignItems : "center" , height : "100vh" , bgcolor : "lightgray" }}>
            <Paper sx={{ display : "flex" , flexDirection : "column" , gap : "20px" , width : "400px" , p : "20px" , bgcolor : "secondary.light"}}>
                <Typography variant="h6" sx={{ textAlign : "center"}}>Sign Up</Typography>
                <TextField type="email" placeholder="email" />
                <TextField type="password" placeholder="password" />
                <TextField type="password" placeholder="re-password" />
            </Paper>
        </Box>

    )
}

export default SignInPage;