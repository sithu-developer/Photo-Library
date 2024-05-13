
import { Box } from '@mui/material'
import {useDropzone} from 'react-dropzone'
import FlipCameraIosOutlinedIcon from '@mui/icons-material/FlipCameraIosOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';


const DropZone = () => {

    const onDrop = ( file : File[]) => {
        console.log(file[0].name) // continue here
    }

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})


  return (
    <Box {...getRootProps()}>
        {isDragActive ?
        <ArrowDownwardOutlinedIcon sx={{ fontSize : "50px" , cursor : "pointer"}} />
        :<FlipCameraIosOutlinedIcon sx={{ fontSize : "50px" , cursor : "pointer"}} />
        }
        <input {...getInputProps()} />
    </Box>
  )
}

export default DropZone;