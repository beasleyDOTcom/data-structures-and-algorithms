'use strict';

const getDiff = require('../subProdAndSum.js');
describe('return the difference between the product and sum of given integer', () => {
    it('should return 15 if given 234', () => {
        let n = 234;
        let output = 15;
        expect(getDiff(n)).toStrictEqual(output);
    });
    it('should return 21 if given 4421', () => {
        let n = 4421;
        expect(getDiff(n)).toStrictEqual(21);
    });
});