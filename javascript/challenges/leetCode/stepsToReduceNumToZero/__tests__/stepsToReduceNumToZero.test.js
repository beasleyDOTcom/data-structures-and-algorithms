/*
Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

Example 1:

Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.
*/

const numberOfSteps = require('../stepsToReduceNumToZero.js');

describe('return number of Steps to reduce a number to zero given provided operations', () => {
    it('should handle 14', () => {
        expect(numberOfSteps(14)).toStrictEqual(6);
    });
    /*
    Example 2:

    Input: num = 8
    Output: 4
    Explanation: 
    Step 1) 8 is even; divide by 2 and obtain 4. 
    Step 2) 4 is even; divide by 2 and obtain 2. 
    Step 3) 2 is even; divide by 2 and obtain 1. 
    Step 4) 1 is odd; subtract 1 and obtain 0.
    */
   it('should handle 8', () => {
       expect(numberOfSteps(8)).toStrictEqual(4);
   });
   it('should handle 123', () => {
       expect(numberOfSteps(123)).toStrictEqual(12);
   });
});