module.exports = {
  index: booksIndex,
  create: booksCreate,
  show: BooksRegister,
  update: booksUpdate,
  delete: booksDelete
};

const Book = require('../models/book');

function booksIndex(req, res) {
  Book.find((err, books) => {
    if(err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(200).json(books);
  });
}

function booksCreate(req, res) {
  const book = new Book(req.body);
  book.save((err, book) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(201).json(book);
  });
}

function BooksRegister(req, res){
  Book
  .findById(req.params.id, (err, book) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if(!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
  });
}

function booksUpdate(req, res){
  Book
  .findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, book) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
  });
}

function booksDelete(req, res){
  Book.findByIdAndRemove(req.params.id, err => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.sendStatus(204);
  });
}
