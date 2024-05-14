
import { Box, Button, Typography } from '@mui/material'
import {useDropzone} from 'react-dropzone'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

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
      {isDragActive ? <ArrowDropDownCircleOutlinedIcon sx={{ fontSize : "20px" }} />
      :<Button variant='contained' >Change Photo</Button>
      }
      
      <input {...getInputProps()} />
    </Box>
  )
}

export default DropZone;