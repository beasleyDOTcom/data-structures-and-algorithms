const isValidSubsequence = require('../isValidSubsequence.js');

describe('Basic test of isValidSubsequence', () => {
    it('should return true when true', () => {
        let array= [5, 1, 22, 25, 6, -1, 8, 10];
        let sequence= [1, 6, -1, 10];
        expect(isValidSubsequence(array, sequence)).toStrictEqual(true);
    });
});

