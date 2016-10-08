
var assert = require('chai').assert;
var supertest = require('supertest');
var serviceLib = require('../service'), service = serviceLib.service;

var sut = new service();

describe('micro-service', function() {

  var host = 'http://localhost:8000';
  var request = supertest(host);

  beforeEach(function() {
    sut.start(8000);
  });
  
  afterEach(function() {
    sut.stop();
  });

  it('returns 200 on /status', function() {
    request.get('/status').expect(200);
  });

  it('returns json', function() {
    request.get('/status').expect('Content-Type', /json/);
  });

  it('returns name of the service', function() {
    request.get('/status').expect('Content-Type', /json/);
  });
});
