import express from 'express'
import dotenv from 'dotenv'
import router from './routes/contactRoute.js';
import errorhandler from './middleware/errorhandler.js'

const app =express();
dotenv.config();
const port =process.env.PORT;
app.use(express.json());
app.use('/api/contacts',router )
app.use (errorhandler)

app.listen( port ,() => {
   console.log(`servcer is stated at ${port}`)
});
