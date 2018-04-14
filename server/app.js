const express = require('express');
const data = require('./data/data');
const bodyParser = require('body-parser');

const app = express();

const RESPONSE_TIMEOUT = 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-macys-webservice-client-id");
  next();
});

app.use(function (req, res, next) {
  // Disable caching for content files
  // res.header("Max-Age", 0);
  // res.header('Last-Modified', (new Date()).toString());
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', 0);
  res.header('Pragma', 'no-cache');
  next();
});

app.use(express.static('./images'))

app.use(bodyParser.json()); // for parsing application/json

app.get(data.responses.endpoint, (req, res) => {
  setTimeout(function() {
    res.send(data.responses.success);
  }, RESPONSE_TIMEOUT);
});

app.get(data.responses.errorEndpoint, (req, res) => {
  setTimeout(function() {
    res.status(500).send(data.responses.error);
  }, RESPONSE_TIMEOUT);
});

module.exports = app;