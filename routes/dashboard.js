const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');
const db = require('../models');

router.get('/', isLoggedIn, (req, res) => {
  db.user.findAll().then(allUsers => {
    res.render('dashboard', {users: allUsers})
  })
})







module.exports = router;
