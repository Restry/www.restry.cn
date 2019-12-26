'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const api = require('./yuque');
const fallback = require('connect-history-api-fallback')

const router = express.Router();
 
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html')));
 
app.use('/api', api);
 
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));
app.use(fallback());

module.exports = app;
module.exports.handler = serverless(app);
