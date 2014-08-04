// index.js

var Hapi = require('hapi');
var time = require('./handlers/time');

var port = 8000;
var host = 'localhost';

var server = new Hapi.Server(host, port);


server.route({
  method: 'GET',
  path: '/time',
  handler: time.handleGet
});

server.start(function () {
  console.log(['Server started at http://', host, ':', port].join(''));
});


