// This type of 'require' looks first in the local node_modules folder, then the global node_modules folder.
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('Hello World!');
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

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});