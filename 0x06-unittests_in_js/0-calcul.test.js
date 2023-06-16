const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', () => {
    it('rounding of a', () => {
        assert.equal(calculateNumber(1, 3), 4);
        assert.equal(calculateNumber(1, 3.7), 5);
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });

    it('rounding of b', () => {
        assert.equal(calculateNumber(3, 1), 4);
        assert.equal(calculateNumber(3.7, 1), 5);
        assert.equal(calculateNumber(3.7, 1.5), 6);
    });

    it('suming of a and b', () => {
        assert.equal(calculateNumber(1, 3.5), 5);
        assert.equal(calculateNumber(1, 3.7), 7;
        assert.equal(calculateNumber(1.5, 3.7), 7);
    });
})
