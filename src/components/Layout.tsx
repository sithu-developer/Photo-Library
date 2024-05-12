import { useAppDispatch } from "@/store/hook";
import { getUser } from "@/store/slices/userSlice";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

interface Props {
    children : ReactNode;
}

const PageLayout = ( {children} : Props ) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    
    useEffect(() => {
      const emailId = localStorage.getItem("emailId");
      if(emailId) {
        dispatch(getUser({ emailId : Number(emailId) , onSuccess : () => {
          router.push(router.pathname.includes("/app")? router.pathname : "/app/home-page") 
        } }))
      } 
    } , [])
    
    return (
      <Box>
        <TopBar />
        <Box sx={{ display : "flex" }}>
            <SideBar />
            <Box>{children}</Box>
        </Box>
      </Box>
    )
}

export default PageLayout;