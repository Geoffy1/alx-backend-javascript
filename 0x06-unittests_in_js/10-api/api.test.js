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

describe('/Cart page', () => {
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

describe('/available_payments endpoint', () => {
  it('should return correct payment methods', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      const expectedPaymentMethods = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
      expect(JSON.parse(body)).to.deep.equal(expectedPaymentMethods);
      done();
    });
  });

  it('other', (done) => {
    request.get('http://localhost:7865/available_payments', (error, response, body) => {
      // Add other assertions or tests here
      done();
    });
  });
});

describe('/login endpoint', () => {
  it('should return a welcome message with the username', (done) => {
    const userName = 'Betty';
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName })
    };

    request(options, (error, response, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });

  it('other', (done) => {
    const userName = 'Betty';
    const options = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName })
    };

    request(options, (error, response, body) => {
      // Add other assertions or tests here
      done();
    });
  });
});
