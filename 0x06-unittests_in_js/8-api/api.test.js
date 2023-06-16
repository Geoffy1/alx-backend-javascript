const { expect } = require('chai');
const request = require('request');
const app = require('./api');

describe('Index page', () => {
  it('correct status code', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('GET / returns correct response', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('other', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      // Add other assertions or tests here
      done();
    });
  });
});
