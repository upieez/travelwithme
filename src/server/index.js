const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

dotenv.config();

let data = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("dist"));
app.use(cors());

app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

app.get("/key", function (req, res) {
  const apiKey = {
    key: process.env.API_KEY,
  };
  res.send(apiKey);
});

app.listen(port, function () {
  console.log(`Listening on port ${port}!`);
});
