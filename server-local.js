"use strict";
//Node.js
const dotenv = require("dotenv");
dotenv.config();

console.log("process.env.YQ", process.env.YQTOKEN);

const app = require("./express/server");
app.listen(3000, () => console.log("Local app listening on port 3000!"));
