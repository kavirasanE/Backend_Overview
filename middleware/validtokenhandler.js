import asyncHandler from "express-async-handler";
import jwt from  "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config();

const  validToken = asyncHandler ( (req,res,next) => {
   let token ;
   let authHeader = req.headers.Authorization || req.headers.authorization;
   if(authHeader && authHeader.startsWith('Bearer')){
    token = authHeader.split(" ")[1];
    jwt.verify (token,process.env.ACCESS_TOKEN ,(err,decoded) => {
       if(err) {
        res.status(400);
        throw new Error("this is not true");
       }
       req.user =decoded.user;
       next();
    });
    if(!token) {
        res.status(400);
        throw new Error("this is not authorized");
    }
   }
});

export default validToken;