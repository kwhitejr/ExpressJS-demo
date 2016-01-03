var express = require('express');
var router = express.Router();

//GET/POST http://localhost:3000/users
router.route('/')
  .get(function(req, res) {
    res.send('All users');
  })
  .post(function(req, res) {
    res.send('Creating a dude');
  });

//GET/POST http://localhost:3000/users/1
// ':id' is a url variable
router.route('/:id')
  .get(function(req, res) {
    console.log(req.params);
    res.send('Some dude');
  })
  .put(function(req, res) {
    res.send('Updated a dude');
  });

module.exports = router;
