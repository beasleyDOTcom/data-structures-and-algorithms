'use strict';
const maxWealth = require('../maximumWealth.js');
describe('return the wealth of the richest customer', () => {
    it('should pass first basic test', () => {
        let accounts = [[1,2,3],[3,2,1]];
        expect(maxWealth(accounts)).toStrictEqual(6);
    });
    it('should pass second basic test', () => {
        let accounts = [[1,5],[7,3],[3,5]];
        expect(maxWealth(accounts)).toStrictEqual(10);
    });
    it('should pass third basic test', () => {
        let accounts = [[2,8,7],[7,1,3],[1,9,5]];
        expect(maxWealth(accounts)).toStrictEqual(17);
    });
});