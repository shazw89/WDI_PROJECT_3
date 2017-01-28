const express = require('express');
const router = express.Router();

const users = require('../controllers/users'); // DOES NOT EXISTS YET

router.route('/users')
  .get(users.index)
  .post(users.create);
// router.route('/users/:id')
//   .get(users.show)
//   .put(users.update)
//   .patch(users.update)
//   .delete(users.delete);

module.exports = router;
