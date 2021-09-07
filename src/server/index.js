const dotenv = require("dotenv");
dotenv.config();

const API_KEY = process.env.API_KEY;

console.log(`Your API key is ${API_KEY}`);

const mockAPIResponse = require("./mockAPI.js");

//import express

const express = require("express");

// create an instance for server

const app = express();

const PORT = 8081;

app.listen(PORT, (err) => {
  if (errr) {
    throw new Error("err");
  } else {
    console.log(`server is rinning on port ${PORT}`);
  }
});
