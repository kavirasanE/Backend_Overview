import express from 'express'
import dotenv from 'dotenv'
import router from './routes/contactRoute.js';
import errorhandler from './middleware/errorhandler.js'
import mongoose from 'mongoose';
dotenv.config();
const app =express();

const port =process.env.PORT;

app.use(express.json());
app.use('/api/contacts',router )
app.use (errorhandler)


app.listen (port ,() => {
   console.log(`servcer is stated at ${port}`)
});

mongoose
.connect(process.env.MONGODB)
.then(() => {
    console.log('connected to mongo dev')
}).catch ((err) => {
   console.log(err)
});
