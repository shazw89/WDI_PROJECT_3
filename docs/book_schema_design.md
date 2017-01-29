#Book Schema Design

**Created by:** Chris Perry

**First posted:** 28 January 2017

**Updated on:**

##Implemented Schema
```
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
```

##Schema Description
###twcBookId:
The intended purpose of this field is that it should act as our reference when a new book is registered in the app. This will be what a registered user will put in the front of a book, for a 'finder' to then input into the app on discoverung the book.

###addedByUser:
This will be a single reference to the userId of the person who registered the book into the system. 

_Note: I'm currently unsure whether that reference ought to be the `_id` field from the user model, or whether we ought to be generating a more 'user friendly' id that can be displayed as part of a user profile._

###goodreadsId:
This is a straight reference to the id that Goodreads use as their own book reference. When looking at one of their book URLs, it is the number portion only, as seen in the example below.

`https://www.goodreads.com/book/show/17082001-javascript-programming?ac=1&from_search=true`
###isbn:
This is perhaps our most critical field, whether supplied by a user (it should be), or accessed from the goodreads API (from where we need to record it in our own Db). It's worth noting that ISBN numbers come in a variety of forms, but all indications are, that the goodreads API doesn't much care how which is used, nor how they're formatted.

###title:
Included in the schema for now, particularly as it helps give useful data in the seed file to work with.

_Note: This may not be required if the data is pulled from goodreads in the functioning app._

###image:
Included in the schema for now.

_Note: This may not be required if the data is pulled from goodreads in the functioning app._
###description:
Included in the schema for now.

_Note: This may not be required if the data is pulled from goodreads in the functioning app._
###foundByUser:
This is an array that will record which user(s) found a book on its travels.

_Note: This field most likely requires a matching time/date stamp to record when it was found. We may also need a field to keep track of where it was found also.
###currentStatus:
This will show what the current status of a registered book is. 

_Note: At this point though, I'm a little uncertain as to what the options will be. One to discuss._

###timestamps:
As we've used previously, I've added this field, as it may well be a useful entity to access to shown when a book was registered/released/found etc.

##Possible Additions to Schema

1. Time/date stamp to record when a registered was found.
2. A string field to record where a book was found.
3. A string field to allow a user to record where a book was released.