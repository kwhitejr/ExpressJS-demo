// This type of 'require' looks first in the local node_modules folder, then the global node_modules folder.
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/about', function(req, res) {
  res.send('We are awesome!');
});

app.get('/faq', function(req, res) {
  res.send('What you need?');
});

app.get('/contact', function(req, res) {
  res.send('<form>Dat Form Doe</form>');
});

app.post('/contact', function(req, res) {
  res.send('Got a POST request');
});

app.put('/contact', function(req, res) {
  res.send('Got a PUT request at /user');
});

app.delete('/contact', function(req, res) {
  res.send('Got a DELETE request at /user');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});