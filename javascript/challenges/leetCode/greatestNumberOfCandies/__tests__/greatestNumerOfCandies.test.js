'use strict';

const candyBarron = require('../greatestNumberOfCandies.js');

describe('should return list of boolean values representing whether or not each kid is among the greatest candy barrons.', () => {
    it('should work on first example', () => {
        let candies = [2,3,5,1,3];
        let extraCandies = 3;
        let output = [true,true,true,false,true];
        expect(candyBarron(candies, extraCandies)).toBe(output); 
    });
    it('should work on second example', () => {
        let candies = [4,2,1,1,2];
        let extraCandies = 1;
        let output = [true,false,false,false,false];
        expect(candyBarron(candies, extraCandies)).toBe(output); 
    });
});