module.exports = {
  index: booksIndex,
  create: booksCreate,
  show: BooksRegister,
  update: booksUpdate,
  delete: booksDelete
};

const Book = require('../models/book');

function booksIndex(req, res) {
  Book.find({})
  .populate('user')
  .exec((err, books) => {
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
  .findOne({
    shortId: req.params.shortId
  }, (err, book) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if(!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
  });
}

function booksUpdate(req, res){
  Book
  .findOneAndUpdate({
    shortId: req.params.shortId
  }, req.body, { new: true }, (err, book) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
  });
}

function booksDelete(req, res){
  Book.findOneAndRemove({
    shortId: req.params.shortId
  }, err => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.sendStatus(204);
  });
}
