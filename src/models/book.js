const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  datePublished: {
    type: Date,
  },
});

module.exports = bookSchema;
