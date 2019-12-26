const SDK = require('@yuque/sdk');
const express = require('express');
const router = express.Router();

const client = new SDK({
  token: process.env.YQTOKEN,
  // other options
});

// const result = await client.users.get();
// console.log(result);
const localDB = {};

// apis
const { users, groups, repos, docs } = client;


router.get('/books', async (req, res) => {
  if (!localDB.books)
    localDB.books = await repos.list({ user: 'restry' });

  res.send(localDB.books);
});

router.get('/docs/:id', async (req, res) => {
  const { id } = req.params;
  if (!localDB[`docs_${id}`]) {
    localDB[`docs_${id}`] = await docs.list({ namespace: `restry/${id}` });
  }

  res.send(localDB[`docs_${id}`]);
})


module.exports = router;