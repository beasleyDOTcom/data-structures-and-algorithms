'use strict';

const removeDupes = require('../removeDupesFromArray.js');


describe('removeDupes(arr) should accept an array and return that same array mutated to be without any duplicate values', () => {
    it('should do nothing to an array without duplicate values', () => {
        const arr = [1,2,3,4,5,6,7];
        expect(removeDupes(arr)).toBe(arr);
    });
    it('should remove a duplicate from an array', () => {
        const arr = [1,2,7,3,4,5,6,7];
        expect(removeDupes(arr)).toStrictEqual([1,2,7,3,4,5,6]);
    });
    it('should mutate original so that it does not have ', () => {
        const before = [1,2,7,3,4,5,6,7];
        const after = [1,2,7,3,4,5,6];
        removeDupes(before);
        expect(before).toStrictEqual(after);
    });
});