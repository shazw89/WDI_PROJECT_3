const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: { type: String, trim: true, required: true },
  author: { type: String, trim: true },
  image: { type: String, trim: true },
  description: { type: String, trim: true },
  googleId: { type: String }
  // twcBookId: { type: String, trim: true },
  // addedByUser: { type: String, trim: true },
  // goodreadsId: { type: String, trim: true },
  // isbn: { type: String, trim: true },

  // foundByUser: { type: Array },
  // currentStatus: { type: String, trim: true }
}, {
  timestamps: true
});

// const droppedBookSchema = mongoose.Schema({
//   user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
//   book: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
// });


module.exports = mongoose.model('Book', bookSchema);
