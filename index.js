import express from 'express';
import cors from 'cors';
import connectDB from './database/connectDB.js';
import mongoose from 'mongoose';
import router from './router/router.js';
import dotenv from 'dotenv';
import { fetchCoins } from './controller/getCoinController.js';
dotenv.config();


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


connectDB();




app.use('/home',router);



const PORT = process.env.PORT || 9000 ; 

app.listen(PORT, ()=>{

    console.log(`Server listening to port ${PORT}`);

});



// updating the coins in db by fetching the coins every 1 hour. 

setInterval(fetchCoins, 60 * 60 * 1000);
