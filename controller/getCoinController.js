import axios from "axios";
import coinModel from "../model/coinModel.js";
import { API_BASE_URL } from "../apiConfig.js";

export const fetchCoins = async (req, res) => {

    try {

        const response = await axios.get(`${API_BASE_URL}/coins/list?include_platform=false`);

        console.log(response);

        const coins = response.data.map(coin => ({
            coinID: coin.id.toString(),
            name: coin.name
        }));


        // Clearing the pre existing records

        await coinModel.deleteMany({});
        console.log("Records have been cleared !");

        //Entering the new records 

        await coinModel.insertMany(coins);

        console.log({ message: "Coins fetched and stored successfully" });

    } catch (error) {
        console.error("Error fetching coins:", error);

    }
};


export const pricePredictor = async (req, res) => {

    try {

         // body -  parameters

        const { fromCurrencyId, date, toCurrencyId } = req.query;

        const response = await axios.get(`${API_BASE_URL}/coins/${fromCurrencyId}/history?date=${date}&localization=true`);

        //fetching the relative pricing of currency 1 with respect to currency 2 whose value is present in the response object in the from of an array of objects

        const relativePrice = response.data.market_data.current_price[toCurrencyId.toLowerCase()];

        console.log(`Relative price of ${fromCurrencyId} with ${toCurrencyId} is : `, relativePrice);

        res.send({ message: `Relative price of ${fromCurrencyId} with ${toCurrencyId} is : ${relativePrice}` });

    } catch (error) {

        console.error('Error:', error);

        res.status(500).json({ error: 'Internal server error' });
    }
};


export const fetchCompanies = async (req, res) => {


    try { 

         // body -  parameter

        const { currencyId } = req.query;

        const response  = await axios.get(`${API_BASE_URL}/companies/public_treasury/${currencyId}`);

        const companies = response.data.companies;

        //fetching the details of the companies owining the currency with given ID

        console.log(`List and details of the companies holding ${currencyId} are: `,companies);

        res.send({ message: `List and details of the companies holding ${currencyId} are: ${JSON.stringify(companies)}` });


    }

    catch (error) { 

        console.error('Error:', error);
        
        res.status(500).json({ error: 'Internal server error' });

    }


}
