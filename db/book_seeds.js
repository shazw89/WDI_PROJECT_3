const mongoose = require('mongoose');

const databaseUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/travellingBooks';
mongoose.connect(databaseUrl);

const Book = require('../models/book');

Book.collection.drop();

const books = [
  {
    title: 'The Wind-Up Bird Chronicle',
    author: 'Haruki Murakami',
    image: 'http://books.google.com/books/content?id=0g5tCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
  },
  {
    title: 'The Rough Guide to London',
    author: 'Rob Humphreys',
    image: 'https://books.google.com/books/content?id=6w2dngEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api'
  },
  {
    title: 'The Last Juror',
    author: 'John Grisham',
    image: 'http://books.google.com/books/content?id=siuFipJkvoQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
  },
  {
    title: 'Thank You, Jeeves',
    author: 'P.G. Wodehouse',
    image: 'http://books.google.com/books/content?id=WnKl4eXEzDgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
  },
  {
    title: 'JavaScript Programming: Pushing the Limits',
    author: 'Jon Raasch',
    image: 'http://books.google.com/books/content?id=JR0oAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api'
  }
]



  // {
  //   twcBookId: '0',
  //   addedByUser: '',
  //   goodreadsId: '11273',
  //   isbn: '1-86046-581-1',
  //   title: 'The Wind-up Bird Chronicle',
  //   image: '',
  //   description: '',
  //   foundByUser: '',
  //   currentStatus: ''
  // },
  // {
  //   twcBookId: '1',
  //   addedByUser: '',
  //   goodreadsId: '6622348',
  //   isbn: '978-1-84836-278-9',
  //   title: 'The Rough Guide to London',
  //   image: '',
  //   description: '',
  //   foundByUser: '',
  //   currentStatus: ''
  // },
  // {
  //   twcBookId: '2',
  //   addedByUser: '',
  //   goodreadsId: '1053990',
  //   isbn: '1-844-13159-9',
  //   title: 'The Last Juror',
  //   image: '',
  //   description: '',
  //   foundByUser: '',
  //   currentStatus: ''
  // },
  // {
  //   twcBookId: '3',
  //   addedByUser: '',
  //   goodreadsId: '2078018',
  //   isbn: '978-0-09-951373-5',
  //   title: 'Thank You, Jeeves',
  //   image: '',
  //   description: '',
  //   foundByUser: '',
  //   currentStatus: ''
  // },
  // {
  //   twcBookId: '4',
  //   addedByUser: '',
  //   goodreadsId: '17082001',
  //   isbn: '978-1-118-52456-5',
  //   title: 'JavaScript Programming: Pushing the Limits',
  //   image: '',
  //   description: '',
  //   foundByUser: '',
  //   currentStatus: ''
  // }
// ];

books.forEach((book) => {
  Book.create(book, (err, book) => {
    if (err) return console.log(err);
    return console.log(`${book.title} was saved.`);
  });
});
