'use strict';
const isPaly = require('../isPalindrome.js');
describe('should return true if string is palindrome, else false', () => {
    it('should return true if given string with single char', () => {
        expect(isPaly('H')).toBeTruthy();
    });
    it('should return false if given a string that is not a palindrome', () => {
        expect(isPaly('haha')).toBeFalsy();
    });
    it('should return true if given hannah', () => {
        expect(isPaly('hannah')).toStrictEqual(true);
    });
});