const twoNumberSum = require('../twoNumberSum.js');

describe('Basic test of twoNumberSum', () => {
    it('should only give one option', () => {
       let input = [3, 5, -4, 8, 11, 1, -1, 6];
       expect(twoNumberSum(input, 10)).toStrictEqual([-1,11])
    });
});

