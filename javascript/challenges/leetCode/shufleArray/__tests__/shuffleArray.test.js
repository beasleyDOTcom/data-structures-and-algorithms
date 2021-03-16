'use strict';
const shuffle = require('../shuffleArray.js');

describe('should return "shuffled array"', () => {
    it('should pass first basic test', () => {
        let nums = [2,5,1,3,4,7];
        let n = 3;
        let output = [2,3,5,4,1,7];
        expect(shuffle(nums,n)).toStrictEqual(output);
    });
    it('should pass second basic test', () => {
        let nums = [1,2,3,4,4,3,2,1];
        let n = 4;
        let output = [1,4,2,3,3,2,4,1];
        expect(shuffle(nums,n)).toStrictEqual(output);
    });
    it('should pass third basic test', () => {
        let nums = [1,1,2,2];
        let n = 2;
        let output = [1,2,1,2];
        expect(shuffle(nums,n)).toStrictEqual(output);
    });
});