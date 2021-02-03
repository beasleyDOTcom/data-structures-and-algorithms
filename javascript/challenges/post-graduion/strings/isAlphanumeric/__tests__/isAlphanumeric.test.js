'use strict';

const isAlpha = require('../isAlphanumeric.js');

describe('does isAlpha return true if every char passed is a alphanumeric else false?', () => {
    it('should return false if passed a string with a space', () => {
        expect(isAlpha('oh happy day')).toBeFalsy();
    });
    it('should return false if string has an underscore', () => {
        expect(isAlpha('oh_happy_day')).toBeFalsy();
    });
    it('should return true if string is only uppercase and lowercase letters', () => {
        expect(isAlpha('howAboutCamelCase')).toBeTruthy();
    });
    it('should return true if string has numbers, upper, and lowercase numbers', () => {
        expect(isAlpha('Astring4TheAg3s')).toBeTruthy();
    });
    it('should return false if given an empty string', () => {
        expect(isAlpha('')).toBeFalsy();
    });
});