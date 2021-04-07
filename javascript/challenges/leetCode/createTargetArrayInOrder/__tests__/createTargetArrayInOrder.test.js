'use strict';

const createTargetArrayInOrder = require('../createTargetArrayInOrder.js');

describe('should build array in specific order', () => {

    it('pass first one', () => {
        // Example 1:
        // Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
        // Output: [0,4,1,3,2]
        // Explanation:
        // nums       index     target
        // 0            0        [0]
        // 1            1        [0,1]
        // 2            2        [0,1,2]
        // 3            2        [0,1,3,2]
        // 4            1        [0,4,1,3,2]

        let  nums = [0,1,2,3,4];
        let index = [0,1,2,2,1];

        expect(createTargetArrayInOrder(nums,index)).toStrictEqual([0,4,1,3,2]);
    });

    it('pass second test', () => {
        // Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
        // Output: [0,1,2,3,4]
        // Explanation:
        // nums       index     target
        // 1            0        [1]
        // 2            1        [1,2]
        // 3            2        [1,2,3]
        // 4            3        [1,2,3,4]
        // 0            0        [0,1,2,3,4]

        let  nums = [1,2,3,4,0];
        let index = [0,1,2,3,0];
    
        expect(createTargetArrayInOrder(nums,index)).toStrictEqual([0,1,2,3,4]);
    });
    it('should pass third basic test', () => {
        let nums = [1];
        let index = [0];
        expect(createTargetArrayInOrder(nums,index)).toStrictEqual([1]);
    });
});