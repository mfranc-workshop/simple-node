var serviceLib = require('./service'), service = serviceLib.service;

var app = new service('service-1-test');

app.start(8101);
