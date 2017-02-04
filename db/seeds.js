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
      username: 'Henry',
      email: 'henry@henry.com',
      password: 'password',
      passwordConfirmation: 'password',
      img: 'images/henry.jpg',
      bio: 'A warrior in every sense of the word. Henry had never seen a book upright until that horrible Thursday, when a bookshelf was installed in his room. The sight so distressed him that he spent most of his teenage years in mute rebellion. He hasn’t quite recovered from this trauma, but he’s certainly put it to constructive use. Or was it destructive use?'
    },{
      username: 'Sharon',
      email: 'sharon@sharon.com',
      password: 'password',
      passwordConfirmation: 'password',
      img: 'https://www.fillmurray.com/g/200/300',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      username: 'James',
      email: 'james@james.com',
      password: 'password',
      passwordConfirmation: 'password',
      img: 'https://www.fillmurray.com/g/200/300',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      username: 'Chris',
      email: 'chris@chris.com',
      password: 'password',
      passwordConfirmation: 'password',
      img: 'https://www.fillmurray.com/g/200/300',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      username: 'Klaudia',
      email: 'klaudia@klaudia.com',
      password: 'password',
      passwordConfirmation: 'password',
      img: 'https://www.fillmurray.com/g/200/300',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }], (err, users) => {
      if (err) return done(err);
      console.log(`${users.length} users were created`);
      return done(null, users);
    });
  },
  function(user, done) {
    Book.create([
      {
        user: user[0]._id,
        title: 'The Wind-Up Bird Chronicle',
        author: 'Haruki Murakami',
        image: 'http://books.google.com/books/content?id=0g5tCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        description: 'A man named Toru Okada is searching the Tokyo suburbs for his wife\'s runaway cat, but soon finds himself searching for his missing wife as well.',
        googleId: '0g5tCwAAQBAJ',
        index: 0
      },
      {
        user: user[1]._id,
        title: 'The Rough Guide to London',
        author: 'Rob Humphreys',
        image: 'https://books.google.com/books/content?id=6w2dngEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
        googleId: '6w2dngEACAAJ',
        index: 1
      },
      {
        user: user[2]._id,
        title: 'The Last Juror',
        author: 'John Grisham',
        image: 'http://books.google.com/books/content?id=siuFipJkvoQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        description: 'Evoking the past Mississippi in the early 1970s, a courtroom drama that\'s pulsating from start to finish. In 1970, The Ford County Times, one of Mississipi\'s more colourful weekly newspapers, went bankrupt. To the surprise and dismay of many, ownership was assumed by 23-year-old college drop-out, Willie Traynor. The future of the paper looked grim until a young mother was brutally raped and murdered by a member of the notorious Padgitt family. Traynor reported all the gruesome details, and his newspaper began to prosper. The murderer, Danny Padgitt, was tried before a packed courtroom in Clanton, Mississippi. The trial came to a startling, dramatic end when the defendant threatened revenge against the jurors if they convicted him. Nevertheless, they found him guilty, and he was sentenced to life in prison. But in Mississippi in 1970 \'life\' didn\'t necessarily mean \'life\', and nine years later Danny Padgitt managed to get himself paroled. He returned to Ford County, and the retribution began.',
        googleId: 'siuFipJkvoQC',
        index: 2
      },
      {
        user: user[3]._id,
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        image: 'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        description: 'Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter \'H\'.\" Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!',
        index: 3
      },
      {
        user: user[4]._id,
        title: 'The Hobbit (Enhanced Edition)',
        author: 'J. R. R. Tolkien',
        image: 'http://books.google.com/books/content?id=rIqOaeTx074C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'Exclusive to this Enhanced version of the eBook are recently discovered audio recordings by J.R.R. Tolkien, and new high-resolution colour images of all of Tolkien’s illustrations for the book, many of which are also included in their earlier black-and-white versions and can be revealed by a simple swipe of the screen.',
        index: 4
      },
      {
        user: user[4]._id,
        title: 'The Secret History',
        author: 'Donna Tartt',
        image: 'http://books.google.com/books/content?id=S4_PyiyJixQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'Truly deserving of the accolade \'modern classic\', Donna Tartt\'s novel is a remarkable achievement - compelling and elegant, dramatic and playful. Under the influence of their charismatic Classics professor, a group of clever, eccentric misfits at an elite New England college discover a way of thinking and living that is a world away from the humdrum existence of their contemporaries. But when they go beyond the boundaries of normal morality, their lives are changed profoundly and for ever.',
        index: 5
      },
      {
        user: user[0]._id,
        title: '2666',
        author: 'Roberto Bolaño',
        image: 'http://books.google.com/books/content?id=6SIBDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'With an introduction by Ben Lerner. The truth is we never stop being children, terrible children covered in sores and knotty veins and tumors and age spots, but ultimately children, in other words we never stop clinging to life because we are life. Santa Teresa, on the Mexico-US border: an urban sprawl, a vortex for lost souls. Convicts and academics find themselves here, as does an American sportswriter, a teenage student with her widowed father, and a reclusive, \'missing\' author. But there is a darker side to the town: girls and women are disappearing at an alarming rate and it is fast becoming the scene of a series of horrifying crimes. As 2666 progresses, the sense of conspiracy grows, and the shadow of the apocalypse is drawing closer. Written with burning intensity in the last years of Roberto Bolaño\'s life, 2666 became a sensation on publication and has been hailed across the world as Bolaño\'s masterpiece. Terrifying, awe-inspiring and beautiful, it is the classic novel that has come to define one of Latin America\'s greatest writers.',
        index: 6
      },
      {
        user: user[1]._id,
        title: 'The Hitch Hiker\'s Guide to the Galaxy',
        author: 'Douglas Adams',
        image: 'http://books.google.com/books/content?id=NvwqK-KEWbwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'First a legendary radio series, then a bestselling book, now a blockbuser movie, the immensely successful Hitch Hiker\'s Guide to the Galaxy needs no introduction. Reissued to coincide with the film\'s release, this hardback omnibus edition include all five parts of the trilogy, incorporating for the first time, Mostly Harmless, along with a guide to the guide and essential notes on how to leave the planet. This single hardback edition is indispensable for any would-be galactic traveller and for old and new fans of Douglas Adams, Doctor Who and bestselling science fiction books.',
        index: 7
      },
      {
        user: user[2]._id,
        title: 'Bambi',
        author: 'Felix Salten',
        image: 'http://books.google.com/books/content?id=bY5Ggn2TfjIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'The beloved story of a deer in the forest reaches a new generation of readers with a fresh new look. Bambi’s life in the woods begins happily. There are forest animals to play with and Bambi’s twin cousins, Gobo and beautiful Faline. But winter comes, and Bambi learns that the woods hold danger—and things he doesn\'t understand. The first snowfall makes food hard to find. Bambi’s father, a handsome stag, roams the forest, but leaves Bambi and his mother alone. Then there is Man. He comes to the forest with weapons that can wound an animal. Bambi is scared that Man will hurt him and the ones he loves. But Man can’t keep Bambi from growing into a great stag himself, and becoming the Prince of the Forest. Repackaged with a vibrant, fresh cover for the first time in two decades, this timeless tale of a young deer’s woodland life is an ideal collectible.',
        index: 8
      },
      {
        user: user[3]._id,
        title: 'On the Bible',
        author: 'Martin Buber',
        image: 'http://books.google.com/books/content?id=vQivpJPhttMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'This text acquaints the reader with Martin Buber\'s works on scripture and with his endeavour to elucidate the meanings of biblical ideas in ages past and in our own time.',
        index: 9
      },
      {
        user: user[4]._id,
        title: 'Octopussy',
        author: 'Ian Fleming',
        image: 'http://books.google.com/books/content?id=B5vGAQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        description: 'The legendary 007 deals with a rich, deranged major who cannot cope when his greedy past catches up with him in Octopussy and matches wits with a Russian agent taking part in a Southeby\'s auction of a Fabergé egg in The Living Daylights, in a volume containing two Bond adventures. Reprint. 25,000 first printing.',
        index: 10
      },
      {
        user: user[0]._id,
        title: 'Lord of the Flies',
        author: 'William Golding',
        image: 'http://books.google.com/books/content?id=pEE4DAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'Since it was first published in 1954, William Golding\'s classic debut novel has remained a stark allegory of civilization, survival, and human nature. As dystopian stories like Hunger Games and Battle Royale surge in popularity, this haunting tale of a group of young boys stranded on a desert island still captivates schoolchildren around the world, raising timeless and profound questions about how easily society can slip into chaos and savagery when rules and order have been abandoned. When a plane crashes on a remote island, a small group of schoolboys are the sole survivors. From the prophetic Simon and virtuous Ralph to the lovable Piggy and brutish Jack, each of the boys attempts to establish control as the reality- and brutal savagery-of their situation sets in. A teacher himself, Golding clearly understood how to interest children with a gripping story and strong, sympathetic characters. The novel serves as a catalyst for thought-provoking discussion and analysis of universal issues, not only concerning the capabilities of humans for good and evil and the fragility of moral inhibition, but beyond. The boys\' struggle to find a way of existing in a community with no fixed boundaries invites readers to evaluate the concepts involved in social and political constructs and moral frameworks. Symbolism is strong throughout, revealing both the boys\' capacity for empathy and hope, as well as illuminating the darkest corners of the human spirit. Ideas of community, leadership, and the rule of law are called into question as the reader has to consider who has a right to power, why, and what the consequences of the acquisition of power may be. Often compared to Catcher in the Rye, Lord of the Flies also represents a coming-of-age story of innocence lost.',
        index: 11
      },
      {
        user: user[1]._id,
        title: 'Managing a Dental Practice',
        author: 'Michael R. Young',
        image: 'http://books.google.com/books/content?id=Ilav9AIxNKUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'The parallel aims of a dental practice are to deliver excellent patient care through highly trained and motivated employees and to maximise income and profit. Achieving these aims as a practice manager demands a clear vision, sound preparation, planning and marshalling of resources, broad business knowledge, an understanding of a rapidly changing world, and above all wise judgement. So why Genghis Khan? Although some in the West see him in negative terms, the Mongol leader created one of the world\'s greatest empires. His hugely successful strategies included intelligence gathering, understanding his rivals\' motivations, being quick to learn and adopt new technologies and ideas, and successful people management. Genghis Khan is one of history\'s most charismatic and dynamic leaders - and you will need all his skill, strength and tenacity to succeed in both dentistry and business. This how to book on survival and empire-building in the dentistry business is ideal for anyone who owns, aspires to own, or is involved in managing a practice. It contains advice relevant to both small and large practices, to dentists working in the National Health Service (NHS) and private practice, and to general and specialist practices.',
        index: 12
      },
      {
        user: user[2]._id,
        title: 'The Idiot',
        author: 'Fyodor Dostoyevsky',
        image: 'http://books.google.com/books/content?id=E0SxCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'The Idiot is a novel by the 19th-century Russian author Fyodor Dostoyevsky. It was first published serially in the journal The Russian Messenger in 1868-9. The title is an ironic reference to the central character of the novel, Prince Lyov Nikolaevich Myshkin, a young man whose goodness and open-hearted simplicity lead many of the more worldly characters he encounters to mistakenly assume that he lacks intelligence and insight. In the character of Prince Myshkin, Dostoevsky set himself the task of depicting \"the positively good and beautiful man\". The novel examines the consequences of placing such a unique individual at the centre of the conflicts, desires, passions and egoism of worldly society, both for the man himself and for those with whom he becomes involved. The result, according to philosopher A.C. Grayling, is \"one of the most excoriating, compelling and remarkable books ever written; and without question one of the greatest.',
        index: 13
      },
      {
        user: user[3]._id,
        title: 'Moby Dick',
        author: 'Herman Melville',
        image: 'http://books.google.com/books/content?id=JwEI95LPZ8EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'This classic story of high adventure, manic obsession, and metaphysical speculation was Melville\'s masterpiece. The tale of Captain Ahab\'s frantic pursuit of the cunning and notorious white whale Moby Dick, is packed with drama, and draws heavily on the author\'s own experiences on the high seas. This edition includes passages from Melville\'s correspondence with Nathaniel Hawthorne, in which the two discussed the philosophical depths of the novel\'s plot and imagery. ABOUT THE SERIES: For over 100 years Oxford World\'s Classics has made available the widest range of literature from around the globe. Each affordable volume reflects Oxford\'s commitment to scholarship, providing the most accurate text plus a wealth of other valuable features, including expert introductions by leading authorities, helpful notes to clarify the text, up-to-date bibliographies for further study, and much more.',
        index: 14
      },
      {
        user: user[4]._id,
        title: 'In Search Of Lost Time Vol 1',
        author: 'Marcel Proust',
        image: 'http://books.google.com/books/content?id=cdt0bwhwvaIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'THE ACCLAIMED FULLY REVISED EDITION OF THE SCOTT MONCRIEFF AND KILMARTIN TRANSLATION In the opening volume of Proust\'s great novel, the narrator travels backwards in time in order to tell the story of a love affair that had taken place before his own birth. Swann\'s jealous love for Odette provides a prophetic model of the narrator\'s own relationships. All Proust\'s great themes - time and memory, love and loss, art and the artistic vocation - are here in kernel form.',
        index: 15
      },
      {
        user: user[0]._id,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        image: 'http://books.google.com/books/content?id=9cFdAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'The Great Gatsby, by the American author F. Scott Fitzgerald, is one of the great novels of twentieth-century literature. Set in the Long Island of 1922, it provides a critical social history of America during the “Roaring Twenties”, an era that Fitzgerald himself dubbed the “Jazz Age”, known for unprecedented economic prosperity, the evolution of jazz music, flapper culture, and bootlegging and other criminal activity. A historic period when “gin was the national drink and sex the national obsession”, as classified by The New York Times.',
        index: 16
      },
      {
        user: user[1]._id,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        image: 'http://books.google.com/books/content?id=QcY-DAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'Since its publication in 1813, Pride and Prejudice\'s blend of humor, romance, and social satire have delighted readers of all ages. In telling the story of Mr. and Mrs. Bennett and their five daughters, Jane Austen creates a miniature of her world, where social grace and the nuances of behavior predominate in the making of a great love story. At the turn of eighteenth-century England, spirited Elizabeth Bennet copes with the suit of the snobbish Mr. Darcy while trying to sort out the romantic entanglements of two of her sisters, sweet and beautiful Jane and scatterbrained Lydia.',
        index: 17
      },
      {
        user: user[2]._id,
        title: 'Heart of Darkness',
        author: 'Conrad, Joseph',
        image: 'http://books.google.com/books/content?id=7lkYCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'Heart of Darkness is a novella (published in 1902) by Joseph Conrad. Before publication, it appeared in a three-part series in Blackwood\'s Magazine (1899). This highly symbolic story is actually a story within a story, or frame tale, following a man named Charlie Marlow as he recounts his adventure to a group of men on a ship at dusk and continuing into the evening. It details an incident earlier in Marlow\'s life, a journey on what readers can assume is the Congo River (although the name of the country Marlow is visiting is never specified in the text) to investigate the work of Kurtz, a Belgian ivory trader in the Congo Free State.',
        index: 18
      },
      {
        user: user[3]._id,
        title: 'The Sun Also Rises',
        author: 'Ernest Hemingway',
        image: 'http://books.google.com/books/content?id=Yc7oAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'This new edition of The Sun Also Rises celebrates the art and craft of Hemingway’s quintessential story of the Lost Generation—presented by the Hemingway family with illuminating supplementary material from the Hemingway Collection at the John F. Kennedy Library. The Sun Also Rises is a classic example of Hemingway’s spare but powerful writing style. A poignant look at the disillusionment and angst of the post-World War I generation, the novel introduces two of Hemingway’s most unforgettable characters: Jake Barnes and Lady Brett Ashley. The story follows the flamboyant Brett and the hapless Jake as they journey from the wild nightlife of 1920s Paris to the brutal bullfighting rings of Spain with a motley group of expatriates. It is an age of moral bankruptcy, spiritual dissolution, unrealized love, and vanishing illusions. First published in 1926, The Sun Also Rises is “an absorbing, beautifully and tenderly absurd, heartbreaking narrative…a truly gripping story, told in lean, hard, athletic prose” (The New York Times). This new Hemingway Library Edition celebrates Hemingway’s classic novel with a personal foreword by Patrick Hemingway, the author’s sole surviving son, and a new introduction by Sean Hemingway, grandson of the author. Hemingway considered the extensive rewriting that he did to shape his first novel the most difficult job of his life. Early drafts, deleted passages, and possible titles included in this new edition elucidate how the author achieved his first great literary masterpiece.',
        index: 19
      },
      {
        user: user[4]._id,
        title: 'Catch-22',
        author: 'Joseph Heller',
        image: 'http://books.google.com/books/content?id=Xfze51E7TEoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'Presents the contemporary classic depicting the struggles of a U.S. airman attempting to survive the lunacy and depravity of a World War II base',
        index: 20
      },
      {
        user: user[0]._id,
        title: 'A Passage to India',
        author: 'Edward Morgan Forster',
        image: 'http://books.google.com/books/content?id=9ULVCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'A Passage to India (1924) is a novel by English author E. M. Forster set against the backdrop of the British Raj and the Indian independence movement in the 1920s. It was selected as one of the 100 great works of 20th century English literature by the Modern Library and won the 1924 James Tait Black Memorial Prize for fiction. Time magazine included the novel in its \"All Time 100 Novels\" list. The novel is based on Forster\'s experiences in India, borrowing the title from Walt Whitman\'s 1870 poem in Leaves of Grass.',
        index: 21
      },
      {
        user: user[1]._id,
        title: 'How to Avoid Huge Ships',
        author: 'John W. Trimmer',
        image: 'http://books.google.com/books/content?id=DF0SAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        description: 'You are the owner-captain of a luxury fifty-foot trawler motoring across the bay with your family and a few friends one balmy summer evening. Off in the distance, beyond the bridge spanning the waterway, you can make out the lights and shape of a containership moving down the channel. Have you ever wondered what action you must take to keep clear of that fast-approaching ship? This book will tell you how to do so quickly. Conscientious skippers are wise to read this book and discover if a ship\'s radar will pick up a small boat at night. It is fascinating to learn what is taking place on the bridge or down in the engine room of one of these leviathans as it heads your way. Can it be stopped before it hits you? Learn how to protect yourself and your loved ones by reading this book written for the private boat owner/captain.',
        index: 22
      },
      {
        user: user[2]._id,
        title: 'Frankenstein',
        author: 'Debra Doyle',
        image: 'http://books.google.com/books/content?id=Q86oUKhubhYC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        description: 'Retells the classic story of a young scientist who discovers the secret of generating life which leads to the creation of a hideous monster, as a graphic novel with study guide.',
        index: 23
      },
      {
        user: user[3]._id,
        title: 'The Castle',
        author: 'Franz Kafka',
        image: 'http://books.google.com/books/content?id=6-FEztrDXTsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'K. kept feeling that he had lost himself, or was further away in a strange land than anyone had ever been before A remote village covered almost permanently in snow and dominated by a castle and its staff of dictatorial, sexually predatory bureaucrats - this is the setting for Kafka\'s story about a man seeking both acceptance in the village and access to the castle. Kafka breaks new ground in evoking a dense village community fraught with tensions, and recounting an often poignant, occasionally farcical love-affair. He also explores the relation between the individual and power, and asks why the villagers so readily submit to an authority which may exist only in their collective imagination. Published only after Kafka\'s death, The Castle appeared in the same decade as modernist masterpieces by Eliot, Joyce, Woolf, Mann and Proust, and is among the central works of modern literature. This translation follows the text established by critical scholarship, and manuscript variants are mentioned in the notes. The introduction provides guidance to the text without reducing the reader\'s own freedom to make sense of this fascinatingly enigmatic novel. ABOUT THE SERIES: For over 100 years Oxford World\'s Classics has made available the widest range of literature from around the globe. Each affordable volume reflects Oxford\'s commitment to scholarship, providing the most accurate text plus a wealth of other valuable features, including expert introductions by leading authorities, helpful notes to clarify the text, up-to-date bibliographies for further study, and much more.',
        index: 24
      },
      {
        user: user[4]._id,
        title: 'Knitting With Dog Hair',
        author: 'Kendall Crolius',
        image: 'http://books.google.com/books/content?id=5sQfZtG7cWUC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        description: 'Tells how to spin yarn and knit clothes with dog hair, and talks about how to collect, clean and store it',
        index: 25
      },
      {
        user: user[0]._id,
        title: 'The Girl on the Train',
        author: 'Paula Hawkins',
        image: 'http://books.google.com/books/content?id=Udv-AwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        description: 'The #1 New York Times Bestseller, USA Today Book of the Year, now a major motion picture starring Emily Blunt. Don\'t miss Paula Hawkins\' new novel, Into the Water, coming May 2017. The debut psychological thriller that will forever change the way you look at other people\'s lives. “Nothing is more addicting than The Girl on the Train.”—Vanity Fair “The Girl on the Train has more fun with unreliable narration than any chiller since Gone Girl. . . . [It] is liable to draw a large, bedazzled readership.”—The New York Times “Marries movie noir with novelistic trickery. . . hang on tight. You\'ll be surprised by what horrors lurk around the bend.”—USA Today “Like its train, the story blasts through the stagnation of these lives in suburban London and the reader cannot help but turn pages.”—The Boston Globe “Gone Girl fans will devour this psychological thriller.”—People EVERY DAY THE SAME Rachel takes the same commuter train every morning and night. Every day she rattles down the track, flashes past a stretch of cozy suburban homes, and stops at the signal that allows her to daily watch the same couple breakfasting on their deck. She’s even started to feel like she knows them. Jess and Jason, she calls them. Their life—as she sees it—is perfect. Not unlike the life she recently lost. UNTIL TODAY And then she sees something shocking. It’s only a minute until the train moves on, but it’s enough. Now everything’s changed. Unable to keep it to herself, Rachel goes to the police. But is she really as unreliable as they say? Soon she is deeply entangled not only in the investigation but in the lives of everyone involved. Has she done more harm than good?',
        index: 26
      },
      {
        user: user[1]._id,
        title: 'Elephant Man',
        author: 'Bernard Pomerance',
        image: 'http://books.google.com/books/content?id=mF0Z7OqdlgQC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        description: 'The Elephant Man is based on the life of John Merrick, who lived in London during the latter part of the nineteenth century. A horribly deformed young man, who has been a freak attraction in traveling side shows, is found abandoned and helpless and is admitted for observation to Whitechapel, a prestigious London hospital. Under the care of a famous young doctor, who educates him and introduces him to London society, Merrick changes from a sensational object of pity to the urbane and witty favorite of the aristocracy and literati. But his belief that he can become a man like any other is a dream never to be realized.',
        index: 27
      },
      {
        user: user[2]._id,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        image: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        description: 'Harper Lee\'s Pulitzer prize-winning masterwork of honor and injustice in the deep south—and the heroism of one man in the face of blind and violent hatred, available now for the first time as an e-book. One of the best-loved stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than thirty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father-a crusading local lawyer-risks everything to defend a black man unjustly accused of a terrible crime.',
        index: 28
      },
      {
        user: user[3]._id,
        title: 'Fashion Cats',
        author: 'Takako Iwasa',
        image: 'http://books.google.com/books/content?id=MLZwRAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        description: 'A showcase of the latest in feline fashion as worn by Prin and Koutaro, two Japanese supermodel cats! In the bestselling tradition of Stuff On My Cat (Hodder & Stoughton, 2006) and I Can Has Cheezburger (Hodder & Stoughton, 2008), comes a truly pioneering title in Haute Cature, in which two supermodel cats don the latest Japanese cat fashion. Packed with lacy shawls, smart collars, frog hats and many more crazy costumes, Fashion Cats won\'t fail to raise a smile and the odd eyebrow.',
        index: 29
      },
      {
        user: user[4]._id,
        title: 'The Bourne Identity',
        author: 'Robert Ludlum',
        image: 'http://books.google.com/books/content?id=eINm4etK1I0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        description: 'Jason Bourne is back in the forthcoming major motion picture starring Matt Damon and Alicia Vikander. Go back to where it all began for Bourne in his first adventure - The Bourne Identity \'Watch your back 007 - Bourne is out to get you\' - Sunday Times He was dragged from the sea, his body riddled with bullets. There are a few clues: a frame of microfilm surgically implanted beneath the skin of his hip; evidence that plastic surgery has altered his face; strange things he says in his delirium, which could be code words. And a number on the film negative that leads to a bank account in Zurich, four million dollars and a name for the amnesiac: Jason Bourne. Now he is running for his life. A man with an unknown past and an uncertain future, the target of assassins and at the heart of a deadly puzzle. He\'s fighting for survival and no one can help him - except the one woman who once wanted to escape him ...',
        index: 30
      },
      {
        user: user[0]._id,
        title: 'Working as a Team',
        author: 'Stuart Schwartz',
        image: 'http://books.google.com/books/content?id=qWjySLbUYQIC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        description: 'Explains how to function effectively and productively in the workplace as part of a team.',
        index: 31
      }
    ], (err, books, users) => {
      if (err) return done(err);
      console.log(`${books.length} books were dropped`);
      return done(null);
    });
  },
  function addEntries(done) {
    Book.findOneAndUpdate({
      title: 'Working as a Team'
    }, { $push: { entries: { $each: [{
      name: 'Henry',
      message: 'GO TEAM!',
      location: 'Aldgate East',
      lat: 51.5152612,
      lng: -0.0722239,
      date: Date.now() - 30 * 24 * 60 * 60 * 1000
    },
    {
      name: 'Klaudia',
      message: 'I never thought this would happen to me',
      location: 'South Kensington',
      lat: 51.4941501,
      lng: -0.1746853,
      date: Date.now() - 10 * 24 * 60 * 60 * 1000
    },
    {
      name: 'Sharon',
      message: 'I wonder if James is the guy I know?',
      location: 'South Kensington',
      lat: 51.51566,
      lng: -0.076211,
      date: Date.now() - 5 * 24 * 60 * 60 * 1000
    },
    {
      name: 'Chris',
      message: 'Why are there no pages in this book?',
      location: 'Whitechapel',
      lat: 51.5119284,
      lng: -0.0691406,
      date: Date.now()
    }]}}}, { upsert: true, new: true }, (err, book) => {
      if (err) return done(err);
      console.log(`${book.entries.length} were saved to ${book.title}`);
      return done(null);
    });
  },
  function addEntries1(done) {
    Book.findOneAndUpdate({
      title: 'The Girl on the Train'
    }, { $push: { entries: { $each: [{
      name: 'Henry',
      message: 'This book helped me realise that all of us are like girls lost on the train. ',
      location: 'Bethnal Green',
      lat: 51.5269736,
      lng: -0.0667204,
      date: Date.now() - 21 * 24 * 60 * 60 * 1000
    },
    {
      name: 'James',
      message: 'I found this on a train, which is fitting. I now understand the meaning of life. I hope whoever reads this next enjoys it as much as I do',
      location: 'Earls Court',
      lat: 51.490331,
      lng: -0.1958417,
      date: Date.now() - 18 * 24 * 60 * 60 * 1000
    }]}}}, { upsert: true, new: true }, (err, book) => {
      if (err) return done(err);
      console.log(`${book.entries.length} were saved to ${book.title}`);
      return done(null);
    });
  },
  function addEntries2(done) {
    Book.findOneAndUpdate({
      title: 'Knitting With Dog Hair'
    }, { $push: { entries: { $each: [{
      name: 'Klaudia',
      message: 'Now both me and my dog look fantastic!',
      location: 'Hammersmith',
      lat: 51.4911875,
      lng: -0.2237315,
      date: Date.now() - 12 * 24 * 60 * 60 * 1000
    },
    {
      name: 'James',
      message: 'All of my dog jumpers came out terribly before reading this book. Thank you so much Klaudia.',
      location: 'Camden',
      lat: 51.55170589999999,
      lng: -0.1588255,
      date: Date.now() - 7 * 24 * 60 * 60 * 1000
    },
    {
      name: 'Sharon',
      message: 'I\'m warm, but my dog is now bald',
      location: 'Bermondsey',
      lat: 51.49858210000001,
      lng: -0.0691276,
      date: Date.now() - 1 * 24 * 60 * 60 * 1000
    }]}}}, { upsert: true, new: true }, (err, book) => {
      if (err) return done(err);
      console.log(`${book.entries.length} were saved to ${book.title}.`);
      return done(null);
    });
  },
  function addEntries3(done) {
    Book.findOneAndUpdate({
      title: 'A Passage to India'
    }, { $push: { entries: { $each: [{
      name: 'Henry',
      message: 'Enraging, but enlightening. A must for the Freedom Fighter',
      location: 'Hampstead Heath',
      lat: '51.5608421',
      lng: '-0.1631376',
      date: Date.now()
    },
    {
      name: 'Sharon',
      message: 'This book gives me a reason to fight',
      location: 'Old Street',
      lat: '51.5263219',
      lng: '-0.08429819999999999',
      date: Date.now()
    }]}}}, { upsert: true, new: true }, (err, book) => {
      if (err) return done(err);
      console.log(`${book.entries.length} were saved to ${book.title}`);
      return done(null);
    });
  },
  function addEntries4(done) {
    Book.findOneAndUpdate({
      title: 'The Great Gatsby'
    }, { $push: { entries: { $each: [{
      name: 'Henry',
      message: 'For when I put down my weapons and pick up a Scotch',
      location: 'Fitzrovia',
      lat: '51.5214993',
      lng: '-0.1365872',
      date: Date.now()
    },
    {
      name: 'Klaudia',
      message: 'Decadence is beautiful, even when it\'s meaningless',
      location: 'Notting Hill',
      lat: 51.5110287,
      lng: -0.205389,
      date: Date.now()
    },
    {
      name: 'James',
      message: 'To live, to love, to let go! Ah, life.',
      location: 'Bloomsbury',
      lat: 51.5218962,
      lng: -0.1279597,
      date: Date.now()
    }]}}}, { upsert: true, new: true }, (err, book) => {
      if (err) return done(err);
      console.log(`${book.entries.length} were saved to ${book.title}`);
      return done(null);
    });
  },
  function addEntries5(done) {
    Book.findOneAndUpdate({
      title: 'Lord of the Flies'
    }, { $push: { entries: { $each: [{
      name: 'Henry',
      message: 'Reminds me of when I was a boy',
      location: 'Shepherd\'s Bush',
      lat: 51.5052027,
      lng: -0.2244752,
      date: Date.now()
    },
    {
      name: 'Sharon',
      message: 'Brb, dealing with traumatic childhood memories',
      location: 'South Kensington',
      lat: 51.4941501,
      lng: -0.1746853,
      date: Date.now()
    },
    {
      name: 'Klaudia',
      message: 'What are all of you whining about? I\'ve read worse',
      location: 'Queen\'s Park',
      lat: 52.254496,
      lng: -0.8986409999999999,
      date: Date.now()
    }]}}}, { upsert: true, new: true }, (err, book) => {
      if (err) return done(err);
      console.log(`${book.entries.length} were saved to ${book.title}`);
      return done(null);
    });
  },
  function addEntries6(done) {
    Book.findOneAndUpdate({
      title: '2666'
    }, { $push: { entries: { $each: [{
      name: 'Henry',
      message: 'Sharon didn\'t like it. I beg to differ',
      location: 'Mornington Crescent',
      lat: 51.5343884,
      lng: -0.1388607,
      date: Date.now()
    },
    {
      name: 'James',
      message: 'A bit pretentious, but I dig it',
      location: 'Oxford Circus',
      lat: 51.74858560000001,
      lng: -1.2419223,
      date: Date.now()
    }]}}}, { upsert: true, new: true }, (err, book) => {
      if (err) return done(err);
      console.log(`${book.entries.length} were saved to ${book.title}`);
      return done(null);
    });
  }, function addEntries7(done) {
    Book.findOneAndUpdate({
      title: 'The Wind-Up Bird Chronicle'
    }, { $push: { entries: { $each: [{
      name: 'Henry',
      message: 'I had a dream like this once...',
      location: 'Hammersmith',
      lat: 51.4911875,
      lng: -0.2237315,
      date: Date.now()
    },
    {
      name: 'James',
      message: 'Surreal. Totes radical',
      location: 'Bethnal Green',
      lat: 51.5269736,
      lng: -0.0667204,
      date: Date.now()
    }]}}}, { upsert: true, new: true }, (err, book) => {
      if (err) return done(err);
      console.log(`${book.entries.length} were saved to ${book.title}`);
      return done(null);
    });
  },
  function addEntries8(done) {
    Book.findOneAndUpdate({
      title: 'The Bourne Identity'
    }, { $push: { entries: { $each: [{
      name: 'Chris',
      message: 'Jason Bourne reminds me of myself in a lot of ways. I think the world can learn a lot from him (and me). Hence I\'m passing the book on',
      location: 'Mayfair',
      lat: 51.5116269,
      lng: -0.147806,
      date: Date.now()
    },
    {
      name: 'James',
      message: 'Chris and Jason are my heros',
      location: 'Oxford Circus',
      lat: 51.74858560000001,
      lng: -1.2419223,
      date: Date.now()
    }]}}}, { upsert: true, new: true }, (err, book) => {
      if (err) return done(err);
      console.log(`${book.entries.length} were saved to ${book.title}`);
      return done(null);
    });
  }, function addEntries9(done) {
    Book.findOneAndUpdate({
      title: 'Fashion Cats'
    }, { $push: { entries: { $each: [{
      name: 'Chris',
      message: 'Did I mention I love cats?',
      location: 'Park Lane',
      lat: 51.5132392,
      lng: -0.1583189,
      date: Date.now()
    }]}}}, { upsert: true, new: true }, (err, book) => {
      if (err) return done(err);
      console.log(`${book.entries.length} were saved to ${book.title}`);
      return done(null);
    });
  }, function addEntries11(done) {
    Book.findOneAndUpdate({
      title: 'Elephant Man'
    }, { $push: { entries: { $each: [{
      name: 'Sharon',
      message: 'I cry every time I read this book.',
      location: 'Knightsbridge',
      lat: 51.4991195,
      lng: -0.1644394,
      date: Date.now()
    }]}}}, { upsert: true, new: true }, (err, book) => {
      if (err) return done(err);
      console.log(`${book.entries.length} were saved to ${book.title}`);
      return done(null);
    });
  }, function addEntries10(done) {
    Book.findOneAndUpdate({
      title: 'To Kill a Mockingbird'
    }, { $push: { entries: { $each: [{
      name: 'James',
      message: 'Can\'t believe the mockingbird dies at the end :(',
      location: 'Regent\'s Park',
      lat: 51.532692,
      lng: -0.141995,
      date: Date.now()
    }]}}}, { upsert: true, new: true }, (err, book) => {
      if (err) return done(err);
      console.log(`${book.entries.length} were saved to ${book.title}`);
      return done(null);
    });
  }
],
function finish(err) {
  if (err) {
    console.log('Error', err);
    return process.exit();
  } else {
    console.log('Success!');
    return process.exit();
  }
});
