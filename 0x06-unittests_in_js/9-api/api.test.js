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

  it('correct result', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
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

describe('Cart page', () => {
  it('correct status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('correct status code when :id is NOT a number (=> 404)', (done) => {
    request.get('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('other', (done) => {
    request.get('http://localhost:7865/cart/12', (error, response, body) => {
      // Add other assertions or tests here
      done();
    });
  });
});
