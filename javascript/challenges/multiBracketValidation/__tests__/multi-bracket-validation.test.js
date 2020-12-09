'use strict'
const testString = '[test}'
const validateBracketTown = require('../multi-bracket-validation.js');
it('should return false if ', () => {
    expect(validateBracketTown(testString)).toBe(false);
});

it.only('should be true with a bunch of balanced brackets', () => {
    expect(validateBracketTown(['{}()[{[]}]'])).toBe(true);
});
it('should return true with ()', () => {
    let string = '()';
    expect(validateBracketTown(string)).toBe(true);
});