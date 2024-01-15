const express = require("express");
const bodyParser = require("body-parser");
const dataService = require("../models/dataService.js");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", (req, res) => {
  res.send("Hello, world!");
});

module.exports = router;
