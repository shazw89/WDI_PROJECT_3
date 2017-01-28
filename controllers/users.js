module.exports = {
  index: usersIndex,
  create: usersCreate
};


const User = require('../models/user');

function usersIndex(req, res) {
  User.find((err, users) => {
    if (err) return res.status(500).json({ message: 'Something went wrong'});
    return res.status(200).json(users);
  });
}

function usersCreate(req, res) {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) return res.status(500).json({ message: 'Something went wrong'});
    return res.status(201).json(user);
  });
}
