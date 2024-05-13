import { useAppSelector } from "@/store/hook";
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material"
import { Gender, User } from "@prisma/client";
import { useEffect, useState } from "react";
import DropZone from "@/components/DropZone";



const MyProfile = () => {
    const user = useAppSelector(store => store.user.item);
    const [ updatedUser , setUpdatedUser ] = useState<User>()
    
    useEffect(() => {
        if(user) {
            setUpdatedUser(user);
        }
    } , [user])

    if(!updatedUser ) return null;
    return (
        <Box sx={{ p : "10px" , display : "flex" , justifyContent : "center" , width : "100vw" }}>
            <Box sx={{ p : "10px" , display : "flex" , flexDirection : "column" , gap : "20px" , width : "400px" }}>
                <Box sx={{ display : "flex" , alignItems : "center" , gap : "20px"}}>
                    <img src={updatedUser.photoSrc ? updatedUser.photoSrc : "/defaultProfile.jpg" } style={{ width : "150px" , height : "150px"}}  />
                    <DropZone />
                </Box>

                <TextField label="Full name" defaultValue={updatedUser.name} onChange={(event) => setUpdatedUser({...updatedUser , name : event.target.value})} />
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={updatedUser.gender}
                    onChange={(event) => setUpdatedUser({...updatedUser , gender : event.target.value as Gender})}
                    sx={{ display : "flex" , flexDirection : "row" , gap : "20px" }}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
                <Box sx={{ display : "flex" , gap : "20px"}}>
                    <Button variant="contained">Cancel</Button>
                    <Button variant="contained">Confirm</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default MyProfile;