const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: { type: String, trim: true, required: true },
  image: { type: String, trim: true },
  description: { type: String, trim: true }
});

module.exports = mongoose.model('Book', bookSchema);
