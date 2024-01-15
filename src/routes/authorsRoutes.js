const express = require('express');
const bodyParser = require("body-parser");
const dataService = require('../models/dataService.js');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get("/", async (req, res) => {
  const authors = await dataService.Author.find();
  res.send(authors);
});

router.get("/:id", async (req, res) => {
  const author = await dataService.Author.findById(req.params.id);
  console.log(author);
  res.status(200).send(author);
});

router.post("/", async (req, res) => {
  const newAuthor = new dataService.Author(req.body);
  const createdAuthor = await newAuthor.save();
  res.status(201).send(createdAuthor);
});

router.put("/:id", async (req, res) => {
  const updatedAuthor = await dataService.Author.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send(updatedAuthor);
});

router.delete("/:id", async (req, res) => {
  await dataService.Author.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

module.exports = router;
