var serviceLib = require('./service'), service = serviceLib.service;

var name = process.env.NAME;
var port = process.env.PORT;

console.log('starting app with name : ' + name + ' and port : ' + port );

var app = new service(name, port);

app.start(port);
