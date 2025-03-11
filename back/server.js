import express from 'express';
import dotenv from 'dotenv';
import {dbConnection} from './config/db.js';
import { router } from "./routes.js";
import path from 'path'

dotenv.config()

const app =  express();
app.use(express.json())


const __dirname = path.resolve();

if(process.env.NODE_ENV === 'production') {
    console
    app.use(express.static(path.join(__dirname, '/front/dist')));


    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'front', 'dist', 'index.html'));    
    })
}

app.use('/v1',router)

app.listen(process.env.PORT || 5000, () => {
    dbConnection();
    console.log('Server started on port: ' + process.env.PORT); 

});