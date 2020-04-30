const SDK = require('@yuque/sdk');
const client = new SDK({
  token: process.env.YQTOKEN,
  // other options
});

// const result = await client.users.get();
// console.log(result);
export const localDB = {};

// apis
const { users, groups, repos, docs } = client;


export default client;