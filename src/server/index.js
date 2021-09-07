const dotenv = require("dotenv");
dotenv.config();

const API_KEY_CREDENTIALS = process.env.API_KEY;

console.log(`Your API key Credentials is ${API_KEY_CREDENTIALS}`);

const mockAPIResponse = require("./mockAPI.js");

//import express library

const express = require("express");

// create an instance for server using express

const app = express();

// static folder selection
app.use(express.static("dist"));
// cors
const cors = require("cors");
app.use(cors());

// import axios library

const axios = require("axios");

// select the port for the server
const PORT_NUMBER = 8081;

// API endpoint

app.get("/", (request, response) => {
  response.sendFile("dist/index.html");
});

app.get("/analysis/*", async (request, response) => {
  try {
    const url = request.params[0];
    // meaningcloud API URL var
    const API_URL_LINK = "https://api.meaningcloud.com/sentiment-2.1";
    // http get req to the API endpoint
    const apiResponse = await axios.get(
      `${API_URL_LINK}?key=${API_KEY_CREDENTIALS}&url=${url}&lang=en`
    );
    // get the api response and send it back tp the frontend
    const { agreement, subjectivity, confidence, irony } = apiResponse.data;
    response.send({ agreement, subjectivity, confidence, irony });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error..This shouldn't be happening..." + error);
  }
});

app.listen(PORT_NUMBER, (err) => {
  if (err) {
    throw new Error("error!");
  } else {
    console.log(`server is running on port number ${PORT_NUMBER}!`);
  }
});
