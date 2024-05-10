import { Typography } from "@mui/material";
import { useRouter } from "next/router"
import { useEffect } from "react";


export default function Home() {
  
  const router = useRouter();
  useEffect(() => {
    router.push("/app")
  } , []);

  return (
   <Typography>Home Page</Typography>
  )
  
}
