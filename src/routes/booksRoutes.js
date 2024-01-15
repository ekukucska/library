const express = require('express');
const bodyParser = require("body-parser");
const dataService = require('../models/dataService.js');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get("/", async (req, res) => {
  const books = await dataService.Book.find();
  res.send(books);
});

router.get("/:id", async (req, res) => {
  const book = await dataService.Book.findById(req.params.id);
  console.log(book);
  res.status(200).send(book);
});

router.post("/", async (req, res) => {
  const newBook = new dataService.Book(req.body);
  const createdBook = await newBook.save();
  res.status(201).send(createdBook);
});

router.put("/:id", async (req, res) => {
  const updatedBook = await dataService.Book.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send(updatedBook);
});

router.delete("/:id", async (req, res) => {
  await dataService.Book.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

module.exports = router;
