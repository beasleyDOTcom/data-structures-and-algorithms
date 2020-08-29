'use strict'
const testString = '[test}'
const bracketTown = require('../multi-bracket-validation.js');
it('should return false if ', () => {
    expect(bracketTown(testString)).toBe(true);
});