var Hapi = require('hapi');
var Good = require('good');
var routes = require('./routes');

var port = process.env.PORT || 8000;
var host = '0.0.0.0';
var server = new Hapi.Server(host, port);

server.route(routes);

server.pack.register(Good, function (err) {
  if (err) {
    throw err;
  }

  server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri);
  });
});


