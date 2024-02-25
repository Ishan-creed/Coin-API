# Coin API

This API provides endpoints to fetch information about cryptocurrencies, predict prices, and fetch companies owning specific coins.

## Endpoints

### 1. `/`

- **Method:** GET
- **Description:** Check if the API is working.

### 2. `/fetchCoins`

- **Method:** GET
- **Description:** Fetch and store the names and IDs of the coins in the database.

### 3. `/predict`

- **Method:** GET
- **Description:** Get the price of one currency into another.
- **Query Parameters:** 
  - `fromCurrencyId`: ID of the currency to predict price for.
  - `date`: Date for which to predict the price.
  - `toCurrencyId`: ID of the currency to predict price against.

### 4. `/fetchCompanies`

- **Method:** GET
- **Description:** Fetch companies owning the following coin.
- **Query Parameters:** 
  - `currencyId`: ID of the currency for which to fetch companies.
    

## Running the API

1. Install Node.js and npm.
2. Clone this repository.
3. Install dependencies using `npm install`.
4. Add a .env file in the directory and provide MONGO_URI 
5. Start the server using `npm start`.
6. You can now access the API endpoints using a tool like Postman or by sending requests from your frontend application.

## Testing the Endpoints

- Use tools like Postman to send requests to the defined endpoints.
- Make sure to provide the required query parameters for the `/predict` and `/fetchCompanies` endpoints.
