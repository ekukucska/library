const mongoose = require("mongoose");
require("dotenv").config();
const authorSchema = require("./author.js");
const bookSchema = require("./book.js");

class MongoService {
  constructor() {
    console.log("Creating connection");
    mongoose
      .connect(`${process.env.DB_CONNECTION_STRING}${process.env.DB_NAME}`)
      .then(() => {
        console.log("Adding models");
        this.Author = mongoose.model("Authors", authorSchema);
        this.Book = mongoose.model("Books", bookSchema);
      });
  }
}

module.exports = new MongoService();
