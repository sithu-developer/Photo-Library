import { Box, Chip, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material"
import { User } from "@prisma/client";
import { useState } from "react";
import DropZone from "./DropZone";

interface Props {
    open : boolean;
    setOpen : (value : boolean) => void;
    updatedUser : User
}

const ProfileChange = ({ open , setOpen , updatedUser } : Props) => {
    const [ photoFile , setPhotoFile ] = useState<File>();
    // here
    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Profile Photo</DialogTitle>
            <DialogContent>
                <img src={updatedUser.photoSrc ? updatedUser.photoSrc : "/defaultProfile.jpg" } style={{ width : "150px" , height : "150px" , borderRadius : "80px" }}  />
                <DropZone setPhotoFile={setPhotoFile} />
                {photoFile ? <Box >
                        <Typography sx={{ mb : "10px" , textAlign : "center"}}>Selected Photo</Typography>
                        <Chip label={photoFile.name} onDelete={() => setPhotoFile(undefined)} />
                        <img src={"/"} />
                    </Box>
                : <span></span>}
            
            </DialogContent>
        </Dialog>
    )
}

export default ProfileChange;