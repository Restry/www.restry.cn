'use strict';
const express = require('express');
const path = require('path');
const fs = require('fs');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
// const api = require('./yuque');
// const fallback = require('connect-history-api-fallback')

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(fs.readFileSync(path.resolve(__dirname, '../dist/index.html')));
  // res.sendFile(path.resolve(__dirname, '../dist/index.html'))
  res.end();
}); 
// router.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html')));
// router.use('/api', api);
 
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));
// app.use(fallback());

module.exports = app;
module.exports.handler = serverless(app);
