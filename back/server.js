import express from 'express';
import dotenv from 'dotenv';
import {dbConnection} from './config/db.js';
import { router } from "./routes.js";

dotenv.config()

const app =  express();
app.use(express.json())

console.log(process.env.MONGO_URL);
app.use('/v1',router)

app.listen(5000, () => {
    dbConnection();
    console.log('Server started on port 5000') 

});