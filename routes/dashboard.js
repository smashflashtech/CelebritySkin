const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn');

router.get('/', isLoggedIn, (req, res) => {
  console.log("SSANITTTYYY")
  res.render('dashboard');
});








module.exports = router;
