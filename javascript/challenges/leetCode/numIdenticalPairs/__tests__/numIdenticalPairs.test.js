'use strict';

const numPairs = require('../numIdenticalPairs.js');

// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

describe('return number of pairs', () => {
    it('should pass first test', () => {
        let nums = [1,2,3,1,1,3];
        expect(numPairs(nums)).toStrictEqual(4);
    });
    it('should pass second test', () => {
        let nums = [1,1,1,1];
        expect(numPairs(nums)).toStrictEqual(6);
    });
    it('should pass third test', () => {
        let nums = [1,2,3];
        expect(numPairs(nums)).toStrictEqual(0);
    });
});