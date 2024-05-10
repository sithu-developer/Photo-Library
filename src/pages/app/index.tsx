import { config } from "@/general/config";
import { useAppDispatch } from "@/store/hook";
import { getUser } from "@/store/slices/userSlice";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AppPage = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    
    useEffect(() => {
      const emailId = localStorage.getItem("emailId");
      if(emailId) {
        dispatch(getUser({ emailId : Number(emailId) , onSuccess : () => {
          router.push("/app/sign-page/sign-in") // add path here
        } }))
      } 
    } , [])
  
  
    return (
      <Box sx={{ width: "100vw" , height : "100vh" , display : "flex" , justifyContent : "center" , alignItems : "center" }}>
        <Paper elevation={4} sx={{ display : "flex" ,width : "800px" , height : "600px" , bgcolor : "primary.main"}}>
          <img src="photoLibrary.avif" style={{ borderTopLeftRadius : "5px" , borderBottomLeftRadius : "5px" }} ></img>
          <Box sx={{ width : "400px" , p : "15px", pt : "30px" }}>
            <Typography sx={{ textAlign : "center" , color : "white" }}>Welcome to Photo Library.<br/> Please , sign up if you are new here or sign in </Typography>
            <Box sx={{display : "flex", flexDirection : "column", gap : "20px", justifyContent : "center" , alignItems : "center" , height : "450px" }}>
              <Button sx={{ bgcolor : "secondary.main"}} variant="contained" onClick={() => router.push(`${config.interfaceUrl}/app/sign-page/sign-up`) } >Sign Up</Button>
              <Typography sx={{color : "white"}}>Or</Typography>
              <Button sx={{ bgcolor : "secondary.main"}} variant="contained" onClick={() => router.push(`${config.interfaceUrl}/app/sign-page/sign-in`) }>Sign In</Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    );
}

export default AppPage;