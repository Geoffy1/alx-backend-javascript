const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', () => {
  it('floating point whole numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it("rounding down b's floating point fractional number", () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it("rounding down a and b's floating point fractional number", () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it("rounding down a's floating point fractional number", () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
