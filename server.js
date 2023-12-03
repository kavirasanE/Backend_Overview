import express from 'express'
import dotenv from 'dotenv'
import router from './routes/contactRoute.js';

const app =express();
dotenv.config();
const port =process.env.PORT;

app.use('/api/contacts',router )

app.listen( port ,() => {
   console.log(`servcer is stated at ${port}`)
});
