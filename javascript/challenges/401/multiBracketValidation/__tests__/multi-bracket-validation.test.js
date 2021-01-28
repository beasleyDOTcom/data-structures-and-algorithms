'use strict'
const testString = '[test}'
const validateBracketTown = require('../multi-bracket-validation.js');
it('should return false if ', () => {
    expect(validateBracketTown(testString)).toBe(false);
});

it('should be true with a bunch of balanced brackets', () => {
    expect(validateBracketTown(['{}()[{[]}]'])).toBe(true);
});
it('should return true with ()', () => {
    let string = '()';
    expect(validateBracketTown(string)).toBe(true);
});
it('should return false if passed "{[}]', () => {
    let string = '{[}]';
    expect(validateBracketTown(string)).toBe(false);
});
it('should be true if given (:)', () => {
    let string = '(,){!}[;]';
    expect(validateBracketTown(string)).toBe(true);
});
it('should be true if given (:)', () => {
    let string = '(@#$%^&*:";){!hahaha}[;hohoho]';
    expect(validateBracketTown(string)).toBe(true);
});
it('should be true if given (:)', () => {
    let string = '(@#$%^&*:";){!hahah%a}[;ho$hoho]';
    expect(validateBracketTown(string)).toBe(true);
});