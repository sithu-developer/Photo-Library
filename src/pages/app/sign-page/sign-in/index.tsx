import { useAppDispatch } from "@/store/hook";
import { signInUser } from "@/store/slices/userSlice";
import { SignInUserOptions } from "@/types/user";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Typography } from "@mui/material"
import { useRouter } from "next/router";
import { useState } from "react";

const defaultUser : SignInUserOptions = { 
    email : "" , password : ""
}

const SignInPage = () => {
    const [ user , setUser ] = useState<SignInUserOptions>(defaultUser);
    const [ showPassword , setShowPassword ] = useState<boolean>(false);
    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleShowPassword = () => {
        showPassword ? setShowPassword(false) : setShowPassword(true)
    }
    
    const handleUserSignIn = () => {
        dispatch(signInUser({...user  , onError() {
            alert("Your email or password is incorrect!")
        }, onSuccess : () => {
            alert("You are successfully logged in.")
            router.push("/app/home-page")
        }}))
    }

    return (
        <Box sx={{ display : "flex" , justifyContent : "center" , alignItems : "center" , height : "100vh" , bgcolor : "lightgray" }}>
            <Paper sx={{ display : "flex" , flexDirection : "column" , gap : "20px" , width : "400px" , p : "20px" , bgcolor : "info.main"}}>
                <Typography variant="h6" sx={{ textAlign : "center"}}>Sign In</Typography>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">email</InputLabel>
                    <OutlinedInput
                        label="email"
                        id="outlined-adornment-email"
                        endAdornment={<InputAdornment position="end">@gmail.com</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        onChange={(event) => setUser({ ...user , email : ( event.target.value + "@gmail.com")})}
                    />
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">password</InputLabel>
                  <OutlinedInput
                    onChange={(event) => setUser({...user , password : String(event.target.value)})}
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleShowPassword}
                          edge="end"
                        >
                          {!showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="password"
                  />
                </FormControl>
        
                <Box sx={{ display : "flex" , gap : "20px"}}>
                    <Button variant="contained" onClick={() => router.push("/")} >Back</Button>
                    <Button variant="contained" type="submit" onClick={handleUserSignIn} disabled={!user.email || !user.password } >Sign In</Button>
                </Box>
            </Paper>
        </Box>
    )
}
export default SignInPage;