const mongoose = require('mongoose');
const shortid  = require('shortid');

const bookSchema = mongoose.Schema({
  shortId: { type: String, trim: true, unique: true, default: () =>  shortid.generate(), required: true },
  title: { type: String, trim: true, required: true },
  author: { type: String, trim: true },
  image: { type: String, trim: true },
  description: { type: String, trim: true },
  googleId: { type: String, trim: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  entries: [{
    name: { type: String, trim: true, default: 'anonymous' },
    message: { type: String, trim: true },
    location: { type: String, trim: true },
    lat: { type: Number, trim: true },
    lng: { type: Number, trim: true },
    date: { type: Number }
  }, {
    timestamps: true
  }]
}, {
  timestamps: true
});

bookSchema.pre('save', function(done) {
  return this.model('User').findByIdAndUpdate(this.user, { $addToSet: { books: this._id }}, done);
});

module.exports = mongoose.model('Book', bookSchema);
