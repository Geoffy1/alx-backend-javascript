const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('chai').assert;

describe('getPaymentTokenFromAPI', function () {
  it('should return a resolved promise with the success response', function (done) {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        assert.deepEqual(response, { data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
