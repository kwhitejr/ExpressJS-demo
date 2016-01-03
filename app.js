// This type of 'require' looks first in the local node_modules folder, then the global node_modules folder.
var express = require('express');
var app = express();
var users = require('./routes/users');

/******* Using Jade for Templates ********/
//Tell Express which Template engine we are using by NPM module name
app.set('view engine', 'jade');
//Tell Express where our template files live
app.set('views', './views');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index', { name: 'Kevin', pageTitle: 'Kevin\'s Page, Fool!' });
});

app.get('/about', function(req, res) {
  res.send('We are awesome!');
});

app.get('/faq', function(req, res) {
  res.send('What you need?');
});

app.route('/contact')
  .get(function(req, res) {
    res.send('<form>Dat Form Doe</form>');
  })
  .post(function(req, res) {
    res.send('Got a POST request');
  })
  .put(function(req, res) {
    res.send('Got a PUT request at /user');
  })
  .delete(function(req, res) {
    res.send('Got a DELETE request at /user');
  });

app.route('/book')
  .get(function(req, res) {
    res.send('Get a random book');
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });

app.route('/user')
  .put(function(req, res) {
      res.send('Got a PUT request at /user');
  })
  .delete(function(req, res) {
      res.send('Got a DELETE request at /user');
  });

app.get('/ab?cd', function(req, res) {
  res.send('ab?cd');
});

//Defer all routes matching
//http://localhost:3000/users to module
// Declared everything relative to '/users' only
app.use('/users', users);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});