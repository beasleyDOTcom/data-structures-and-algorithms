'use strict';

const isAlpha = require('../isAlphanumeric.js');

describe('does isAlpha return true if every char passed is a alphanumeric else false?', () => {
    it('should return false if passed a string with a space', () => {
        expect(isAlpha('oh happy day')).toStrictEqual('false');
    });
    it('should return false if string has an underscore', () => {
        expect(isAlpha('oh_happy_day')).toStrictEqual('false');
    });
    it('should return true if string is only uppercase and lowercase letters', () => {
        expect(isAlpha('howAboutCamelCase')).toStrictEqual('true');
    });
    it('should return true if string has numbers, upper, and lowercase numbers', () => {
        expect(isAlpha('Astring4TheAg3s')).toStrictEqual('true');
    });
    it('should return false if given an empty string', () => {
        expect(isAlpha('')).toStrictEqual('false');
    });
});