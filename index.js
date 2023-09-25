const express = require("express");
const Db = require("./db/db");
require('dotenv').config({path: './.env'});

const app = express();

const PORT = 5000;

Db();

app.listen(PORT, () => {
  console.log(`Server start at PORT : ${PORT}`);
});
