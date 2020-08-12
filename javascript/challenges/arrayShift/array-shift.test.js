'use strict'
const insertShiftArray = require('./array-shift.js');
it('should be GREAT!', () => {
 expect(1).toStrictEqual(1);   
});
it('should have different output than input', () => {
    expect(insertShiftArray([1,2,3], 7)===[1,2,3]).toBeFalsy();
});
it('should be better than this', () => {
    expect(insertShiftArray([1,2,3,4], 9).length).toStrictEqual(5);
});
it('should return an array with the value inserted into the middle', () =>{
    expect(insertShiftArray([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42]);
})
it('should not mutate the original array', () => {
    const immutable = [1,2,3,4];
    insertShiftArray(immutable, 99)
    expect(immutable).toStrictEqual([1,2,3,4])
});
