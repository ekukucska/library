const express = require("express");
const bodyParser = require("body-parser");
const dataService = require("../models/dataService.js");
const rootRoutes = require("./rootRoutes.js");
const authorsRoutes = require("./authorsRoutes.js");
const booksRoutes = require("./booksRoutes.js");

const router = express.Router();

router.use("/", rootRoutes);
router.use("/api/authors", authorsRoutes);
router.use("/api/books", booksRoutes);

module.exports = router;
