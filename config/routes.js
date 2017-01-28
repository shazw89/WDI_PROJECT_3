const express = require('express');
const router = express.Router();

const users = require('../controllers/users'); 
const books = require('../controllers/books');

router.route('/users')
  .get(users.index)
  .post(users.create);
router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .patch(users.update)
  .delete(users.delete);

router.route('/books')
 .get(books.index)
 .post(books.create);
router.route('/books/:id')
 .get(books.show)
 .patch(books.update)
 .put(books.update)
 .delete(books.delete);

module.exports = router;
