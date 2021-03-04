'use strict';

const singleNumber = require('../singleNumber.js');

describe('return only number that exists once in array', () => {
    it('should return 1 if given [1,2,2]', () => {
        expect(singleNumber([1,2,2])).toStrictEqual(1)
    });
    it('should return 4 if given [4,1,2,1,2]', () => {
        expect(singleNumber([4,1,2,1,2])).toStrictEqual(4)
    });
});