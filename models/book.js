const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  twcBookId: { type: String, trim: true },
  addedByUser: { type: String, trim: true },
  goodreadsId: { type: String, trim: true },
  isbn: { type: String, trim: true },
  title: { type: String, trim: true, required: true },
  image: { type: String, trim: true },
  description: { type: String, trim: true },
  foundByUser: { type: Array },
  currentStatus: { type: String, trim: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);
