import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const URI = process.env.MONGO_URI;


const Connection = () => {
  
  mongoose
  .connect(URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
  });

};

export default Connection;