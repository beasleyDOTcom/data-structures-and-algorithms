'use strict';

const minOp = require('../minOpToMakeEqualArray.js');
describe('minimum number of operations to balance array', () => {
    it('should call function', () => {
        expect(minOp(3)).toStrictEqual(2);
    });

    it('should handle 6', () => {
        expect(minOp(6)).toStrictEqual(9);
    });
    it('soul handle 8', () => {
        expect(minOp(8)).toStrictEqual(16);
    });
    it('should ', () => {
        expect(minOp(5)).toStrictEqual(6);
    });
});