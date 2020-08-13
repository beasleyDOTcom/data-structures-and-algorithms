'use strict'
const binarySearch = require('./array-binary-search.js');

describe('array binary search test suite', () =>{
    it('should return the index of the key in the inserted array', () => {
        expect(binarySearch([4,8,15,16,23,42], 15)).toStrictEqual(2)
    });
    it('should return -1 if the key is not present in the array', () => {
        expect(binarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1)
    });
    
})