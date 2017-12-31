'use strict';
require('./support');

const supertest = require('supertest'),
  sinon = require('sinon'),
  express = require('express'),
  redirector = require('../../server/redirector.js');

describe('redirector', function(){
  it('should redirect if the REDIRECT_ORIGIN is set', function(done){
    sinon.stub(redirector, 'redirectOrigin').returns('http://redirected.com');

    let app = express();
    app.use(redirector.middleware);

    supertest(app)
      .get('/')
      .query({url: 'http://localhost:8001', callback: 'foo'})
      .expect('location', 'http://redirected.com/?url=http%3A%2F%2Flocalhost%3A8001&callback=foo')
      .expect(302, done);
  });
});
