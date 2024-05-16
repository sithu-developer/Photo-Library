
import { Box, Button } from '@mui/material'
import { ReactNode } from 'react';
import {useDropzone} from 'react-dropzone'

interface Props {
  setPhotoFile : ( value : File ) => void;
  children : ReactNode;
}

const ProfileDropZone = ({setPhotoFile , children } : Props ) => {

  const onDrop = ( file : File[]) => {
      setPhotoFile(file[0]);
  }

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <Box {...getRootProps()}>
      {children}
      <input {...getInputProps()} />
    </Box>
  )
}

export default ProfileDropZone;