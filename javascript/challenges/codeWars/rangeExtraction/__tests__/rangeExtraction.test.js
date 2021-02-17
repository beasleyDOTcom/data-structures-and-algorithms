'use strict';

const solution = require('../rangeExtraction.js');
describe('The goal of this test suite is to determine if, given an array of integers, the function returns numbers that demonstrate range IE 4-10 or 44-99', () => {
    it('should do nothing when nothing is requried', () => {
        const arr = [1,3,5,6,8,9];
        expect(solution(arr)).toStrictEqual('1,3,5,6,8,9');
    });
    it('should perform one range maneuver', () => {
        const arr = [1,2,3,4,5,6,8,9];
        expect(solution(arr)).toStrictEqual('1-6,8,9')
    });
    it('should be able to start and stop extracting range multiple times', () => {
        const arr = [-1,1,2,3,4,5,7,8,9,11];
        expect(solution(arr)).toStrictEqual('-1,1-5,7-9,11')
    });
});