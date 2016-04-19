var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  db = require('db-mock');

var config = {
  port: 8081
};

// configure body-parser
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// allow CORS
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

require('./students')(app, db);
require('./courses')(app, db);

var server = app.listen(config.port, function () {
  console.log('API is up and running on port:', server.address().port);
});
