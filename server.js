const express = require("express");
const mongoose = require("mongoose");
const app = express();
// dotenv.config()
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
