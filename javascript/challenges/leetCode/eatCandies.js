'use strict';
// given an array of ints return max number of unique numbers that may be eaten if length / 2
// how many types of candies are there?
// how many are allowed to be eaten?
// if candy types < allowed to be eaten, return candy types
// else if return allowed to be eaten.
function distributeCandies(candyType) {
    const allowed = candyType.length / 2; // max candies allowed 
    const types = new Set(candyType).size; // max candies available
    return types > allowed ? allowed : types; 
};