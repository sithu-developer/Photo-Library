import { fileUpload } from "@/general/multer";
import {Request , Response} from 'express'

export const config = {
    api: {
      bodyParser: false
    }
}

export default function handler(
  req: Request,
  res: Response,
) {
    try {
        fileUpload(req , res , (err) => {
            if(err) {
                console.log(err);
                return res.status(500).send("Internal server error1");
            }
            const files = req.files as Express.MulterS3.File[] ;
            const file = files[0];
            const photoSrc = file.location;
            res.status(200).send({ photoSrc });
        })
    } catch (err) {
        console.log(err);
        res.status(500).send("internal server error2");
    }
}
