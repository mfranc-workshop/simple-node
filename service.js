var express = require('express');

var app = express();

app.get('/status', function(req, res) {
  res.status(200).json({ status: 'green' });
});

exports.service = function() {
  this.server;

  this.start = function(port) {
    this.server = app.listen(port, function() {});
  };

  this.stop = function() {
    this.server.close();
  };

  return this;
};
