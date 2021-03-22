'use strict';

const reverseInt = require('../reverseInt.js');

describe('reverse number if its in range', () => {
//     123 returns 321

// -123 returns -321

// Math.pow(-2, 31)-100 returns 0;
// Math.pow(2, 31)+100 returns 0;
    it('should return 321 if given 123', () => {
        expect(reverseInt(123)).toStrictEqual(321);
    });
    it('should return -321 if given -123', () => {
        expect(reverseInt(-123)).toStrictEqual(-321);
    });
    it('should return 0 if given number outside of range', () => {
        expect(reverseInt(Math.pow(3,31))).toStrictEqual(0);
    });
});