'use strict';

const removeDupes = require('../removeDupesArr.js');

describe('remove duplicates', () => {
    it('should return an array unchanged if given an array without dupes', () => {
        const arr = [1,2,3,4,5,6,7,8,9];
        expect(removeDupes(arr)).toStrictEqual(arr);
    });
    it('should return an array with duplicates removed', () => {
        const arr = [1,2,3,4,5,6,7,8,9,1,5,9];
        expect(removeDupes(arr)).toStrictEqual([1,2,3,4,5,6,7,8,9])
    });
});