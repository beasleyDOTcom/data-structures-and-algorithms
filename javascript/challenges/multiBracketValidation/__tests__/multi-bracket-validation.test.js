'use strict'
const testString = '[test}'
const bracketTown = require('../multi-bracket-validation.js');
it('should return false if ', () => {
    expect(bracketTown(testString)).toBe(false);
});

it('should ', () => {
    expect(bracketTown(['[{[]}]'])).toBeTruthy()
});