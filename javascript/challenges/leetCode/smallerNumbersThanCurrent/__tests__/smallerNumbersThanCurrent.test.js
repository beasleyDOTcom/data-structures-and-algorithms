'use strict';

/*
Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]
Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]
*/
const smallerNumbers = require('../smallerNumbersThanCurrent.js');

describe('Name of the group', () => {
    it('should pass first test', () => {
        let nums = [8,1,2,2,3];
        let output = [4,0,1,1,3];
        expect(smallerNumbers(nums)).toStrictEqual(output);
    });
    it('should pass second test', () => {
        let nums = [6,5,4,8];
        let output = [2,1,0,3];
        expect(smallerNumbers(nums)).toStrictEqual(output);
    });
    it('should pass third test', () => {
        let nums =[7,7,7,7];
        let output = [0,0,0,0];
        expect(smallerNumbers(nums)).toStrictEqual(output);
    });
});