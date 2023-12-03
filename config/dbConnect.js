import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

export const connectdb = async () => {
        mongoose.connect(process.env.MONGODB)
        .then (()=> {
            console.log('connected mongodb')
        })
        .catch((err) => {
console.log(err.message);
        })
}

