import express from 'express'
import { registerUser,  loginUser, currentUser } from '../controller/userController.js';
import dotenv from "dotenv"
import validToken from '../middleware/validtokenhandler.js';
//import validToken from '../middleware/validtokenhandler.js';

dotenv.config();

const userRouter = express.Router();

userRouter.post ('/register',registerUser);
userRouter.get('/login',loginUser)
userRouter.get('/current',validToken,currentUser)


export default userRouter