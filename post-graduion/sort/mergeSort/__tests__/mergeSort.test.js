'use strict';

const mergeSort = require('../mergeSort.js');

describe('Merge Sort', () => {
    const testCase = [1,8,7,5,4,6,3,2,7.7,99,9.1]
    it('should return an array with numbers', () => {
        const answer = mergeSort(testCase)
        expect(typeof(answer[0])).toBe('number');
    });
    it('should sort numbers from lowest to highest', () => {
        const answer = mergeSort(testCase);
        expect(answer).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 7.7, 8, 9.1, 99]);
    });
});