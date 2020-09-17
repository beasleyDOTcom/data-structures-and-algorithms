'use strict'
const quickStart = require('../quickSort.js');

it('should return a sorted array if provided a random unsorted array', () => {
    const myArrayCyrus = [2,4,7,5,9,13,11,3];
    expect(quickStart(myArrayCyrus)).toStrictEqual([  2, 3,  4,  5,
        7, 9, 11, 13]);
});

it('should return a sorted array if provided a reverse-sorted array', () => {
    const myArrayCyrus = [20,18,12,8,5,-2];
    expect(quickStart(myArrayCyrus)).toStrictEqual([ -2, 5, 8, 12, 18, 20 ]);
});

it('should return a sorted array if provided a "few uniques" array', () => {
    const myArrayCyrus = [5,12,7,5,5,7];
    expect(quickStart(myArrayCyrus)).toStrictEqual([ 5, 5, 5, 7, 7, 12 ]);
});

it('should return a sorted array if provided a Nearly-sorted array', () => {
    const myArrayCyrus = [2,3,5,7,13,11];
    expect(quickStart(myArrayCyrus)).toStrictEqual([ 2, 3, 5, 7, 11, 13 ]);
});