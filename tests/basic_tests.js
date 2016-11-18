var supertest = require('supertest');
var serviceLib = require('../service'), service = serviceLib.service;

var serviceName = 'basic-service-test';

var port = 8000;

var now = (done) => (err, res) => err ? done.fail(err) : done();

var sut = new service(serviceName, port, true);

describe('micro-service', function() {

  var host = 'http://localhost:8000';
  var request = supertest(host);

  beforeEach(function() {
    sut.start(port);
  });
  
  afterEach(function() {
    sut.stop();
  });

  it('returns 200 on /status', function(done) {
    request
    .get('/status')
    .expect(200)
    .end(now(done));
  });

  it('returns json', function(done) {
    request
    .get('/status')
    .expect('Content-Type', /application\/json/)
    .end(now(done));
  });

  it('returns name of the service', function(done) {
    request
    .get('/status')
    .expect({name: serviceName})
    .end(now(done));
  });
});
