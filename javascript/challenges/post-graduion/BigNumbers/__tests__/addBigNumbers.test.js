'use strict';

const addBig = require('../addBigNumbers.js');

describe('Does addBig successfully take in two strings and return their sum as a string?', () => {
    it('should add 1+1 ', () => {
        expect(addBig('1', '1')).toStrictEqual('2');
    });
    it('should add larger number', () => {
        expect(addBig('10000001', '99999999')).toStrictEqual('20000000');
    });
    it('should add a short string and long string', () => {
        expect(addBig('1', '9999')).toStrictEqual('10000');
    });
    it('should add a long string and short string', () => {
        expect(addBig('999999','1')).toStrictEqual('1000000');
    });
    it('should add BIG NUMBERS!', () => {
        expect(addBig('9999999999999999999999999999999999999999999999','1000000000000000000000000000000000000000000001')).toStrictEqual('10000000000000000000000000000000000000000000000')
    });
});