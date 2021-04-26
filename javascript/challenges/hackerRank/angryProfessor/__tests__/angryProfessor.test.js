'use strict';
// Given the arrival time of each student and a threshhold number of attendees, determine if the class is cancelled.

// Example
// The first  students arrived on. The last  were late. The threshold is  students, so class will go on. Return YES.

// Note: Non-positive arrival times () indicate the student arrived early or on time; positive arrival times () indicate the student arrived  minutes late.
const angryProfessor = require('../angryProfessor.js');
describe('should class be cancelled?', () => {
    it('should pass first basic test', () => {
        let k = 3;
        let a = [-2,-1,0,1,2];
        expect(angryProfessor(k,a)).toStrictEqual('YES')
    });
    it('should pass second basic test', () => {
        let k = 3;
        let a = [-1,-3,4,2];
        expect(angryProfessor(k,a)).toStrictEqual('NO')
    });
    it('should pass third basic test', () => {
        let k = 2;
        let a = [0,-1,2,1]
        expect(angryProfessor(k,a)).toStrictEqual('YES')
    });
});