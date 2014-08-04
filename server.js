var Hapi = require('hapi');
var routes = require('./routes');

var port = process.env.PORT || 8000;
var host = '0.0.0.0';

var server = new Hapi.Server(host, port);


server.route(routes);

server.start(function () {
  console.log(['Time API server started at http://', host, ':', port].join(''));
});

