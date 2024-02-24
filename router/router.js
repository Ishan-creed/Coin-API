import express from 'express';
const router = express.Router();
import { fetchCoins , pricePredictor, fetchCompanies} from '../controller/getCoinController.js';


router.get("/",(req,res)=>{
    res.send("API Working");
});



// For fetching and storing the names and ids of the coin in databse

router.get('/fetchCoins',fetchCoins);

// For getting the price of one currency into another

router.get('/predict',pricePredictor);

// For fetching companies owning the following coin

router.get('/fetchCompanies',fetchCompanies);


export default router;