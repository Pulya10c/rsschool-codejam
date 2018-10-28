const assert = require('assert');

Object.freeze(assert);
const MakeFun = require('./make/make.js');

const sum = (a, b) => a + b;
const sum2 = (a, b) => a * 2 + b * 2;
describe('Return result for array', () => {
  it('1', () => {
    const solutions = MakeFun(15)(34, 21, 666)(41)(sum);
    assert.deepEqual(solutions, 777);
  });
  it('2', () => {
    const solutions = MakeFun(4)(15, 1)(34, 21, 24, 666)(41, 999)(sum);
    assert.deepEqual(solutions, 1805);
  });
  it('3', () => {
    const solutions = MakeFun(1, 2, 3)(4)(5)(6, 7, 8)(sum);
    assert.deepEqual(solutions, 36);
  });
  it('4', () => {
    const solutions = MakeFun(10)(sum);
    assert.deepEqual(solutions, 10);
  });
  it('5', () => {
    const solutions = MakeFun(34, 21, 666)(34, 21, 666)(sum);
    assert.deepEqual(solutions, 1442);
  });
  it('6', () => {
    const solutions = MakeFun(10, 10)(sum2);
    assert.deepEqual(solutions, 40);
  });
  it('7', () => {
    const solutions = MakeFun(34, 21, 666)(34, 21, 666)(sum2);
    assert.deepEqual(solutions, 14104);
  });
});
