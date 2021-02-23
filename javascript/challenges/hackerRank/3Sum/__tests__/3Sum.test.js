'use strict';

const threeSum = require('../3Sum.js');

describe('Given an array of integers, return an array with every unique combination of 3 numbers which add up to 3', () => {
    function sum(matrix){
        let isTrue = false;
        for(let i = 0; i < matrix.length; i++){
            let sum = 0;
            for(let k = 0; k < matrix[i].length; k++){
                sum += matrix[i][k];
            }
        }
    }
    
    it('should should return an matrix of length 2', () => {
        const arr = [-1,0,1,2,-1,-4];
        expect(sum(threeSum)).toHaveLength(2);

    });
    it('should work with sample input', () => {
        const arr = [-1,0,1,2,-1,-4];
    expect(sum(threeSum(arr))).toBeTruthy();
    });
    it('should contain array with expected individual elements', () => {
        const arr = [-1,0,1,2,-1,-4];
        let response = threeSum(arr);
        expect(response[0]).toContain(-1);
        expect(response[0]).toContain(0);        
    });

});