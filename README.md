# Free The Books

## Overview

Our third project was a group project and we needed to build an Angular app. We decided on an app called Free The Books, which promoted a novel form of physical book sharing. Our users would register a book on our app, generating a unique code that they would write in the book along with the URL to our site. They would then leave the book in the wild for others to find. Anyone who found the book could leave a comment on the book's profile so that others can track the book's journey, creating a narrative on the object of the book itself. To keep the tone parodic and irrevent, we presented Free The Books as a political movement whose aim was to free books from the tyranny of shelves. 

## The Build

We used: MongoDB, Express.js, Node.js, Angular.js, Angular-Slick, jQuery, angular-jwt, ui-bootstrap, Skeleton, Google Map API's and Google Books.

After setting up the basic MEAN stack framework, we created a search bar with a typeahead functionality using ui-bootstrap. This returned the top ten search results based on what the user had typed. We got our search results by linking the search bar to the Google Books API. We limited this to two API requests per second to avoid exceeding Google Books' API restrictions. 

We then used Math.random in a separate function to generate a unique code for the book once a search result had been selected and the user was taken to the book show page. After the user added a message and the location where the book was left, the information is saved onto our database, along with the exact latitude and longitude of the book's location courtesy of Google Maps API. The form where the user entered the book info is then replaced with a map and the message. Similarly, when someone finds the book, they may enter the unique code that we encourage the book's owner to write in it and leave a message of their own, along with the new location where they've left the book for someone else to find.

We also included what we call the Freedom Feed, which is an Angular-Slick carousel featuring the latest 10 books that have been left in the wild. We also coded some buttons which allow the user to see the last 10 previous books.

The user profiles also feature an Angular-Slick carousel and a map.

## Pluses

Our app brought five very different people together. The idea behind it is engaging and very open to interpretation, which made it entertaining for all of us to decide on what our tone and presentation would be. I was largely responsible for our branding and stylistic decisions, so I relished the challenge of throwing ideas at my team and coming to a finished product that represented all of us accurately. I believe we got to know and respect one another better and truly become team players through out project. I am proud of both our app and of our combined efforts to make it the polished, personable product it is today. 

## Challenges 

My team members and I all had different ideas of what we wanted out of our project and sometimes had trouble reconciling our viewpoints. What made our fundamental differences more challenging was the fact that some of us were often afraid of voicing disagreement. The process would have gone much more smoothly had we just communicated more effectively and planned out our course of action earlier.

## Potential Developments

One day, it would be great to actually bring this app to fruition and spread word of it to the general public. I think we had something really good going on.

## Overall

While it was not always smooth-sailing for us, we effectively weathered the storms to deliver a slick, memorable app to the class. This project showed me that I'm much more of a team player than I thought I was and that a little understanding and cooperation goes a long way in the development world. I grew so much from this project that I opted to be in another group for the final one. 
