const secret = process.env.SECRET || 'Something very very secret...';
const port = process.env.PORT || 3000;
const db = 'mongodb://localhost/travellingBooks';

module.exports = {
  secret,
  port,
  db
};
