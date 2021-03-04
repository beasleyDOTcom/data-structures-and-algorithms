'use strict';

const missingNumber = require('../missingNumber.js');

describe('should return missing number from range', () => {
    it('should return 2 if given [3,0,1]', () => {
        expect(missingNumber([3,0,1])).toBe(2);
    });
    it('should return 2 if given [0,1]', () => {
        expect(missingNumber([0,1])).toBe(2);
    });

    it('should return 8 if given [9,6,4,2,3,5,7,0,1]', () => {
        expect(missingNumber([9,6,4,2,3,5,7,0,1])).toBe(8);
    });

});