const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const dataService = require("./src/models/dataService.js");
const routes = require("./src/routes/index");

const app = express();
const port = process.env.PORT;

app.use("/", routes);

app.listen(port, () => {
  console.log(`API is listening on port ${port}`);
});
