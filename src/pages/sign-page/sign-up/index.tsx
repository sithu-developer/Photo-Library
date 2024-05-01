import { useAppDispatch } from "@/store/hook";
import { userFunction } from "@/store/slices/userSlice";
import { UserOptions } from "@/types/user";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Typography } from "@mui/material"
import { useRouter } from "next/router";
import { useState } from "react";

const defaultUser : UserOptions = { 
    email : "" , name : "" , password : 0 , rePassword : 0
}

const SignInPage = () => {
    const [ user , setUser ] = useState<UserOptions>(defaultUser);
    const [ showPassword , setShowPassword ] = useState<boolean>(false);
    const [ showRePassword , setShowRePassword ] = useState<boolean>(false);
    const router = useRouter();
    const dispatch = useAppDispatch();

    const handleShowPassword = () => {
        showPassword ? setShowPassword(false) : setShowPassword(true)
    }

    const handleShowRePassword = () => {
        showRePassword ? setShowRePassword(false) : setShowRePassword(true)
    }

    const handleUserFunction = () => {
      if( user.password !== user.rePassword) {
        alert("Password must be same .")
      } else {
        console.log({...user , email : user.email + "@gmail.com"});
        dispatch(userFunction({...user , email : user.email + "@gmail.com" }))
      }
    }

    return (
        <Box sx={{ display : "flex" , justifyContent : "center" , alignItems : "center" , height : "100vh" , bgcolor : "lightgray" }}>
            <Paper sx={{ display : "flex" , flexDirection : "column" , gap : "20px" , width : "400px" , p : "20px" , bgcolor : "info.main"}}>
                <Typography variant="h6" sx={{ textAlign : "center"}}>Sign Up</Typography>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">name</InputLabel>
                    <OutlinedInput
                        label="name"
                        onChange={(event) => setUser({...user , name : event.target.value })}
                    />
                </FormControl>
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">email</InputLabel>
                    <OutlinedInput
                        label="email"
                        id="outlined-adornment-email"
                        endAdornment={<InputAdornment position="end">@gmail.com</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        onChange={(event) => setUser({ ...user , email : event.target.value})}
                    />
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">password</InputLabel>
                  <OutlinedInput
                    onChange={(event) => setUser({...user , password : Number(event.target.value)})}
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
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">re-password</InputLabel>
                  <OutlinedInput
                    onChange={(event) => setUser({...user , rePassword : Number(event.target.value)})}
                    id="outlined-adornment-re-password"
                    type={showRePassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleShowRePassword}
                          edge="end"
                        >
                          {!showRePassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="re-password"
                  />
                </FormControl>
        
                <Box sx={{ display : "flex" , gap : "20px"}}>
                    <Button variant="contained" onClick={() => router.push("/")} >Back</Button>
                    <Button variant="contained" type="submit" onClick={handleUserFunction} disabled={!user.email || !user.name || !user.password || !user.rePassword } >Sign up</Button>
                </Box>
            </Paper>
        </Box>
    )
}
export default SignInPage;