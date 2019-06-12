const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');
const checkRole = require('../auth/checkRoleMW');

router.get('/', restricted, checkRole('student'), (req, res) => {
  Users.find()
    .then(users => {
      res.json({users, user: req.user});
    })
    .catch(err => res.send(err));
});

module.exports = router;
