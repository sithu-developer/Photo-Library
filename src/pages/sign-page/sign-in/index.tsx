import { Box, TextField, Typography } from "@mui/material"

const SignInPage = () => {
    return (
        <Box  sx={{ display : "flex" , flexDirection : "column" , gap : "20px"}}>
            <Typography variant="h6">Sign In</Typography>
            <TextField type="email" placeholder="email" />
            <TextField type="password" placeholder="password" />
        </Box>
    )
}

export default SignInPage;