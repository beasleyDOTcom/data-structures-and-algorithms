'use strict';
const selectionSort = require('../selectionSort.js');

describe('test suite for selection sort', () => {
    it('should return an array', () => {
        expect(typeof(selectionSort([1,2,3,4]))).toStrictEqual('object');
    });
    it('should return array with numbers sort correctly', () => {
        expect(selectionSort([2,3,1])).toStrictEqual([1,2,3]);
    });
    it('should sort more complex numbers "including doubles"', () => {
        expect(selectionSort([2.2, 3.3, 1.1])).toStrictEqual([1.1, 2.2, 3.3]);
    });
    it('should work on a larger array of numbers', () => {
        expect(selectionSort([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48])).toStrictEqual( [ 2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50 ]);
    });
});