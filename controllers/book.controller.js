const db = require("../models");
const Book = db.book;

exports.getBooks = async (req, res) => {
  const books = await Book.find({}).exec();

  if (!books) {
    return res.status(404).send({ message: "Book Not found." });
  }

  res.status(200).send(books);
};
