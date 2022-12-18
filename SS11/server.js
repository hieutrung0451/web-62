const express = require("express");
const { connectToDB, db } = require("./db");

const app = express();
const port = 3000;

app.listen(port, () => {
  connectToDB();
});
