import { Box, Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material"
import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import ProfileDropZone from "./ProfileDropZone";
import { config } from "@/general/config";

interface Props {
    open : boolean;
    setOpen : (value : boolean) => void;
    updatedUser : User
}

const ProfileChange = ({ open , setOpen , updatedUser } : Props) => {
    const [ photoFile , setPhotoFile ] = useState<File>();

    const photoUploadFunction = async() => {
        if(photoFile) {
            const formData = new FormData();
            formData.append("file" , photoFile);
            const response = await fetch(`${config.apiBaseUrl}/fileUpload` , {
                method : "POST",
                body : formData,
            });
            const { photoSrc } = await response.json();
            console.log( "src : " , photoSrc); // profile photo is ending here
        }
    }
    useEffect(() => {
        photoUploadFunction();
    } , [photoFile])
    
    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Profile Photo</DialogTitle>
            <DialogContent>
                <Typography>Set profile and let's other see how cool your acc is.</Typography>
                <ProfileDropZone setPhotoFile={setPhotoFile} children={<img src={updatedUser.photoSrc ? updatedUser.photoSrc : "/defaultProfile.jpg" } style={{ width : "150px" , height : "150px" , cursor : "pointer" }}  />} /> 
                <Box sx={{ display : "flex" , gap : "20px" , mt : "10px"}}>
                    <ProfileDropZone setPhotoFile={setPhotoFile} children={<Button variant='contained' >Change</Button>} /> 
                    <Button variant="contained">Delete photo</Button>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default ProfileChange;