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
    User.create([{
      username: 'henry',
      email: 'henry@henry.com',
      password: 'password',
      passwordConfirmation: 'password',
      img: 'https://www.fillmurray.com/g/200/200',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      username: 'sharon',
      email: 'sharon@sharon.com',
      password: 'password',
      passwordConfirmation: 'password',
      img: 'https://www.fillmurray.com/g/200/300',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      username: 'james',
      email: 'james@james.com',
      password: 'password',
      passwordConfirmation: 'password',
      img: 'https://www.fillmurray.com/g/200/300',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      username: 'chris',
      email: 'chris@chris.com',
      password: 'password',
      passwordConfirmation: 'password',
      img: 'https://www.fillmurray.com/g/200/300',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      username: 'klaudia',
      email: 'klaudia@klaudia.com',
      password: 'password',
      passwordConfirmation: 'password',
      img: 'https://www.fillmurray.com/g/200/300',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }], (err, users) => {
      if (err) return done(err);
      console.log(`${users.length} users were created`);
      return done(null, users[0]);
    });
  },
  function(user, done) {
    Book.create([
      {
        user: user._id,
        title: 'The Wind-Up Bird Chronicle',
        author: 'Haruki Murakami',
        image: 'http://books.google.com/books/content?id=0g5tCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        description: 'A man named Toru Okada is searching the Tokyo suburbs for his wife\'s runaway cat, but soon finds himself searching for his missing wife as well.',
        googleId: '0g5tCwAAQBAJ'
      },
      {
        user: user._id,
        title: 'The Rough Guide to London',
        author: 'Rob Humphreys',
        image: 'https://books.google.com/books/content?id=6w2dngEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        googleId: '6w2dngEACAAJ'
      },
      {
        user: user._id,
        title: 'The Last Juror',
        author: 'John Grisham',
        image: 'http://books.google.com/books/content?id=siuFipJkvoQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        description: 'Evoking the past Mississippi in the early 1970s, a courtroom drama that\'s pulsating from start to finish. In 1970, The Ford County Times, one of Mississipi\'s more colourful weekly newspapers, went bankrupt. To the surprise and dismay of many, ownership was assumed by 23-year-old college drop-out, Willie Traynor. The future of the paper looked grim until a young mother was brutally raped and murdered by a member of the notorious Padgitt family. Traynor reported all the gruesome details, and his newspaper began to prosper. The murderer, Danny Padgitt, was tried before a packed courtroom in Clanton, Mississippi. The trial came to a startling, dramatic end when the defendant threatened revenge against the jurors if they convicted him. Nevertheless, they found him guilty, and he was sentenced to life in prison. But in Mississippi in 1970 \'life\' didn\'t necessarily mean \'life\', and nine years later Danny Padgitt managed to get himself paroled. He returned to Ford County, and the retribution began.',
        googleId: 'siuFipJkvoQC'
      },
      {
        user: user._id,
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        image: 'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        description: 'Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter \'H\'.\" Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!'
      },
      {
        user: user._id,
        title: 'The Hobbit (Enhanced Edition)',
        author: 'J. R. R. Tolkien',
        image: 'http://books.google.com/books/content?id=rIqOaeTx074C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'Exclusive to this Enhanced version of the eBook are recently discovered audio recordings by J.R.R. Tolkien, and new high-resolution colour images of all of Tolkien’s illustrations for the book, many of which are also included in their earlier black-and-white versions and can be revealed by a simple swipe of the screen.'
      },
      {
        user: user._id,
        title: 'The Secret History',
        author: 'Donna Tartt',
        image: 'http://books.google.com/books/content?id=S4_PyiyJixQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'Truly deserving of the accolade \'modern classic\', Donna Tartt\'s novel is a remarkable achievement - compelling and elegant, dramatic and playful. Under the influence of their charismatic Classics professor, a group of clever, eccentric misfits at an elite New England college discover a way of thinking and living that is a world away from the humdrum existence of their contemporaries. But when they go beyond the boundaries of normal morality, their lives are changed profoundly and for ever.'
      },
      {
        user: user._id,
        title: '2666',
        author: 'Roberto Bolaño',
        image: 'http://books.google.com/books/content?id=6SIBDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'With an introduction by Ben Lerner. The truth is we never stop being children, terrible children covered in sores and knotty veins and tumors and age spots, but ultimately children, in other words we never stop clinging to life because we are life. Santa Teresa, on the Mexico-US border: an urban sprawl, a vortex for lost souls. Convicts and academics find themselves here, as does an American sportswriter, a teenage student with her widowed father, and a reclusive, \'missing\' author. But there is a darker side to the town: girls and women are disappearing at an alarming rate and it is fast becoming the scene of a series of horrifying crimes. As 2666 progresses, the sense of conspiracy grows, and the shadow of the apocalypse is drawing closer. Written with burning intensity in the last years of Roberto Bolaño\'s life, 2666 became a sensation on publication and has been hailed across the world as Bolaño\'s masterpiece. Terrifying, awe-inspiring and beautiful, it is the classic novel that has come to define one of Latin America\'s greatest writers.'
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
      lng: -0.072299,
      date: Date.now()
    },
    {
      name: 'Klaudia',
      message: 'I never thought this would happen to me',
      location: 'Somewhere near Aldgate East Station',
      lat: 51.5158,
      lng: -0.073,
      date: Date.now()
    },
    {
      name: 'Sharon',
      message: 'I wonder if James is the guy I know?',
      location: 'A few lat lngz away from somewhere',
      lat: 51.51566,
      lng: -0.076211,
      date: Date.now()
    },
    {
      name: 'Chris',
      message: 'Why are there no pages in this book?',
      location: 'Near my house',
      lat: 51.515444,
      lng: -0.077000,
      date: Date.now()
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
