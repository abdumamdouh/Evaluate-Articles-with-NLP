const dotenv = require("dotenv");
dotenv.config();

const API_KEY = process.env.API_KEY;

console.log(`Your API key is ${API_KEY}`);

const mockAPIResponse = require("./mockAPI.js");

//import express

const express = require("express");

// create an instance for server

const app = express();

// static folder
app.use(express.static("dist"));
// cors
const cors = require("cors");
app.use(cors());

// import axios

const axios = require("axios");

// select the port for the server
const PORT = 8081;

// API endpoint

app.listen(PORT, (err) => {
  if (err) {
    throw new Error("err");
  } else {
    console.log(`server is rinning on port ${PORT}`);
  }
});
