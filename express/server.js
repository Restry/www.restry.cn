"use strict";
const express = require("express");
const path = require("path");
const fs = require("fs");
const serverless = require("serverless-http");
const app = express();
const bodyParser = require("body-parser");
// const api = require('../build/yuque');
// const fallback = require('connect-history-api-fallback')
const SDK = require("@yuque/sdk");

const client = new SDK({
  token: process.env.YQTOKEN,
  // other options
});

// const result = await client.users.get();
// console.log(result);
const localDB = {};

// apis
const { users, groups, repos, docs } = client;

const router = express.Router();
router.get("/", (req, res) => {
  const { p } = req.query;
  res.writeHead(200, { "Content-Type": "text/html" });
  console.log(`query:${JSON.stringify(req.query)}`);
  res.write(
    fs.readdirSync(path.resolve(__dirname, decodeURIComponent(p))).join(";")
  );
  // res.sendFile(path.resolve(__dirname, '../dist/index.html'))
  res.end();
});

const errorHandler = (res) => (err) => {
  res.json({ ok: false, message: err.message });
};

router.get("/books", (req, res) => {
  if (!localDB.books) {
    repos
      .list({ user: "restry" })
      .then((books) => {
        localDB.books = books.filter((a) => a.public);
        res.json(localDB.books);
      })
      .catch(errorHandler(res));
    return;
  }

  res.json(localDB.books);
});

router.get("/docs/:id", (req, res) => {
  const { id } = req.params;
  const cacheDocId = `docs_${id}`;

  if (!localDB[cacheDocId]) {
    docs
      .list({ namespace: `restry/${id}` })
      .then((doc) => {
        localDB[cacheDocId] = doc;
        res.json(localDB[cacheDocId]);
      })
      .catch(errorHandler(res));
    return;
  }
  res.json(localDB[cacheDocId]);
});

router.get("/doc/:bookId/:id", (req, res) => {
  const { id, bookId } = req.params;
  const cacheDocId = `doc_${id}`;

  if (!localDB[cacheDocId]) {
    docs
      .get({ namespace: `restry/${bookId}`, slug: id })
      .then((doc) => {
        localDB[cacheDocId] = doc;
        res.json(localDB[cacheDocId]);
      })
      .catch(errorHandler(res));
    return;
  }
  res.json(localDB[cacheDocId]);
});

// router.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html')));
// router.use('/api', api);

app.use(bodyParser.json());
app.use("/.netlify/functions/server", router); // path must route to lambda
app.use("/", (req, res) => res.sendFile(path.join(__dirname, "../index.html")));
// app.use(fallback());

module.exports = app;
module.exports.handler = serverless(app);
