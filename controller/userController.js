import asyncHandler from "express-async-handler";
import User from "../models/userModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import  dotenv from "dotenv"

dotenv.config();
//@descrip
// router post the data
// access public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
         res.status(400)
         throw new Error("all fields are important")
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }
  const hashedpassword = await bcrypt.hash (password,10);
   const register =await User.create({
      name,
      email,
      password:hashedpassword
   });
   res.status(201).json(register)
});

const loginUser =asyncHandler (async (req,res) => {
      const {name ,password} =req.body;
      if(!name || !password){
        res.status(401)
        throw new Error("pls fill the details");
      }
      const user = await User.findOne({name});
      if(!name) {
        res.status(400)
        throw new Error("your not Authorized");
      }  
      //compare the password
      const hashedpassword = await bcrypt.compare(password,user.password);
      if(user && hashedpassword) {
        const acccessToken = jwt.sign({
          user:{
            name:user.name,
            password:user.hashedpassword,
            id:user.id
          },
        },
        process.env.ACCESS_TOKEN,
        {expiresIn:"15m"})
         res.status(200).json({AccessToken: acccessToken})
      }
});

const currentUser = asyncHandler (async  (req,res) => {
        res.json (req.user);
});

export { registerUser,loginUser,currentUser} 