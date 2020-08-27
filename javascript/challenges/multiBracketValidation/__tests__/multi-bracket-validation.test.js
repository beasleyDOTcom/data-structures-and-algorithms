'use strict'
const testString = '[testty}'
const bracketTown = require('../multi-bracket-validation.js');
it('should return false if ', () => {
    expect(bracketTown(testString)).toBe(true);
});