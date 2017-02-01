const mongoose   = require('mongoose');
const async      = require('async');
const config     = require('../config/config');
const User       = require('../models/user');
const Book       = require('../models/book');

mongoose.connect(config.db);

async.waterfall([
  function clearCollections(done) {
    User.collection.drop();
    Book.collection.drop();
    return done();
  },
  function createUsers(done) {
    User.create({
      username: 'henry',
      email: 'henry@henry.com',
      password: 'password',
      passwordConfirmation: 'password'
    }, (err, user) => {
      if (err) return done(err);
      console.log(`${user.username} was created`);
      return done(null, user);
    });
  },
  function(user, done) {
    Book.create([
      {
        user: user._id,
        title: 'The Wind-Up Bird Chronicle',
        author: 'Haruki Murakami',
        image: 'http://books.google.com/books/content?id=0g5tCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
      },
      {
        user: user._id,
        title: 'The Rough Guide to London',
        author: 'Rob Humphreys',
        image: 'https://books.google.com/books/content?id=6w2dngEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'
      },
      {
        user: user._id,
        title: 'The Last Juror',
        author: 'John Grisham',
        image: 'http://books.google.com/books/content?id=siuFipJkvoQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
      }
    ], (err, books) => {
      if (err) return done(err);
      console.log(`${books.length} were dropped by ${user.username}`);
      return done(null);
    });
  },
  function addEntries(done) {
    Book.findOneAndUpdate({
      title: 'The Wind-Up Bird Chronicle'
    }, { $push: { entries: { $each: [{
      name: 'James',
      message: 'Made my day!',
      location: 'Aldgate East Station',
      lat: 51.515461,
      lng: -0.072299
    },
    {
      name: 'Klaudia',
      message: 'I never thought this would happen to me',
      location: 'Somewhere near Aldgate East Station',
      lat: 51.5158,
      lng: -0.073
    },
    {
      name: 'Sharon',
      message: 'I wonder if James is the guy I know?',
      location: 'A few lat lngz away from somewhere',
      lat: 51.51566,
      lng: -0.076211
    },
    {
      name: 'Chris',
      message: 'Why are there no pages in this book?',
      location: 'Near my house',
      lat: 51.515444,
      lng: -0.077000
    }]}}}, { upsert: true, new: true }, (err, book) => {
      if (err) return done(err);
      console.log(`${book.entries.length} were saved.`);
      return done(null);
    });
  }
], function finish(err) {
  if (err) {
    console.log('Error', err);
    return process.exit();
  } else {
    console.log('Success!');
    return process.exit();
  }
});
