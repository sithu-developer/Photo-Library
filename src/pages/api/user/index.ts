// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/general/prismaClient";
import { GetUserOptions, SignInUserOptions } from "@/types/user";
import { Password } from "@mui/icons-material";
import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const method = req.method;
    const { emailId } = req.query;
    if(method === "GET" && emailId ) {
      if(!emailId) return res.status(400).send("Bad request");
      const user = await prisma.user.findUnique({ where : { id : Number(emailId) , isArchived : false }});
      if(!user) return res.status(400).send("Bad request");
      return res.status(200).json({ user });
    } else if(method === "POST") {
      const { name , email , password } = JSON.parse(req.body) as User;
      const valid = name && email && password;
      if(!valid) return res.status(400).send("Bad request");
      const checkUser = await prisma.user.findUnique({ where : { email , isArchived : false }});
      if(checkUser) return res.status(200).json( { user : checkUser , exist : true })
      const user = await prisma.user.create({ data : { name , email , password }});
      return res.status(200).json({ user });
    } else if( method === "GET") {
      const { email , password } = req.query;
      const email1 = String(email);
      const password1 = String(password);
      const valid = await prisma.user.findUnique({ where : { email : email1 }});
      if(!valid) return res.status(400).send("Bad request1")
      if(password1 !== valid.password) return res.status(400).send("Bad request2")
      return res.status(200).json({ user : valid })
    }
// here
  res.status(401).send("Invalid method .");
}
