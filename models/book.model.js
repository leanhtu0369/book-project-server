const mongoose = require("mongoose");

const Book = mongoose.model(
  "Book",
  new mongoose.Schema({
    name: String,
    view: Number
  }),
  'books'
);

module.exports = Book;
