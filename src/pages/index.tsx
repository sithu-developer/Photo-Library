import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router"
import { useEffect } from "react";


export default function Home() {
  
  const router = useRouter();
  useEffect(() => {
    router.push("/app")
  } , []);

  return (
    <Box>
      <Typography>Home Page1</Typography>
    </Box>

  )
  
}
