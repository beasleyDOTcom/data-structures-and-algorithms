'use strict'
const sort = require('../sort.js');


it('should sort the array', () => {
    let myArr = [8,4,23,42,16,15];
    expect(sort(myArr)).toStrictEqual([4,8,15,16,23,42])
});

it('should sort the reverse sorted array', () => {
    let myArr = [20,18,12,8,5,-2];
    expect(sort(myArr)).toStrictEqual([-2,5,8,12,18,20])
});

it('should sort the few uniques array', () => {
    let myArr = [5,12,7,5,5,7];
    expect(sort(myArr)).toStrictEqual([5,5,5,7,7,12])
});