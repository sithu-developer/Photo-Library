
import { Box } from '@mui/material'
import {useDropzone} from 'react-dropzone'
import ModeEditIcon from '@mui/icons-material/ModeEdit';

interface Props {
  setPhotoFile : ( value : File ) => void;
}

const DropZone = ({setPhotoFile} : Props ) => {

  const onDrop = ( file : File[]) => {
      setPhotoFile(file[0]);
  }

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <Box {...getRootProps()}>
        <ModeEditIcon sx={{ fontSize : "20px"  , cursor : "pointer"}} />
        <input {...getInputProps()} />
    </Box>
  )
}

export default DropZone;