const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('./sumOfOther/sumOfOther');

describe('Return result for array', () => {
  it('1', () => {
    const solutions = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(solutions, [8, 7, 6, 9]);
  });

  it('2', () => {
    const solutions = sumOfOther([3, 17, 21, 0, 45, 2, 9, 3]);
    assert.deepEqual(solutions, [97, 83, 79, 100, 55, 98, 91, 97]);
  });

  it('3', () => {
    const solutions = sumOfOther([21, 32, 34, 91]);
    assert.deepEqual(solutions, [157, 146, 144, 87]);
  });

  it('4', () => {
    const solutions = sumOfOther([1, 2, 3, 4, 5, 6, 7, 8]);
    assert.deepEqual(solutions, [35, 34, 33, 32, 31, 30, 29, 28]);
  });

  it('5', () => {
    const solutions = sumOfOther([9, 8, 7, 6]);
    assert.deepEqual(solutions, [21, 22, 23, 24]);
  });

  it('6', () => {
    const solutions = sumOfOther([21, 32, 34, 91, 34, 56, 8, 45]);
    assert.deepEqual(solutions, [300, 289, 287, 230, 287, 265, 313, 276]);
  });

  it('7', () => {
    const solutions = sumOfOther([0, 1]);
    assert.deepEqual(solutions, [1, 0]);
  });

  it('8', () => {
    const solutions = sumOfOther([13, 13, 13, 13, 13, 13]);
    assert.deepEqual(solutions, [65, 65, 65, 65, 65, 65]);
  });
});
