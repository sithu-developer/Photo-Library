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
    const pageParth = router.pathname;
    const isHomePage = (pageParth === "/")
    const isAppPage= (pageParth === "/app");
    const isSignPage = pageParth.includes("/app/sign-page");
    
    useEffect(() => {
      const emailId = localStorage.getItem("emailId");
      if(emailId) {
        dispatch(getUser({ emailId : Number(emailId) , onSuccess : () => {
          router.push( (isAppPage || isHomePage || isSignPage)?  "/app/home-page" : router.pathname) 
        } }))
      } else {
        router.push("/app") // not signed in
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