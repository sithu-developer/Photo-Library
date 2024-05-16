import multer from "multer";
import multerS3 from "multer-s3"
import { S3Client } from '@aws-sdk/client-s3'
import { config } from "./config";

const s3 = new S3Client({
    region : "sgp1",
    endpoint : config.spaceEndpoint,
    credentials : {
        accessKeyId : config.spaceAccessKeyId,
        secretAccessKey : config.spaceSecretAccessKey,
    }
})

export const fileUpload = multer({
    storage : multerS3({
        s3 : s3,
        bucket : "msquarefdc",
        acl : "public-read",
        key : ( req , file , cb ) => {
            cb(null , `foodie-pos/si-thu-naing/${Date.now()}_${file.originalname}`)
        }
    })
}).array("file" , 1);