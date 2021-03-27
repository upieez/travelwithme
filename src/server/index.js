const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();
const port = 8080;

dotenv.config();

let data = [];

// ! ONLY FOR DEVELOPMENT NEVER TO BE USED IN PRODUCTION
// ? enables NPM RUN DEV mode to work in a single command
if (process.env.NODE_ENV !== "production") {
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const config = require("../../webpack.dev");
  const compiler = webpack(config);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    })
  );
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("dist"));
app.use(cors());

app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

app.post("/api/geonames", async function (req, res) {
  const getGeoNamesAPI = await fetch(
    `http://api.geonames.org/searchJSON?formatted=true&q=${req.body.country}}&username=${process.env.GEONAMES_KEY}`
  );
  const result = await getGeoNamesAPI.json();
  res.json(result);
});

app.post("/api/weatherbit", async function (req, res) {
  const getWeatherbitAPI = await fetch(
    `https://api.weatherbit.io/v2.0/forecast/daily?lat=${req.body.latitude}&lon=${req.body.longitude}&key=${process.env.WEATHERBIT_KEY}`
  );
  const result = await getWeatherbitAPI.json();
  res.json(result);
});

app.post("/api/pixabay", async function (req, res) {
  const getPixabayAPI = await fetch(
    `https://pixabay.com/api/?q=${req.body.country}&image_type=photo&category=travel&safesearch=true&order=popular&orientation=horizontal&key=${process.env.PIXABAY_KEY}`
  );
  const result = await getPixabayAPI.json();
  res.json(result);
});

app.listen(port, function () {
  console.log(`Listening on port ${port}!`);
});
