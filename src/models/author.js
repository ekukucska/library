const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  book: { String },
  dateOfBirth: {
    type: Date,
  },
});

module.exports = authorSchema;
