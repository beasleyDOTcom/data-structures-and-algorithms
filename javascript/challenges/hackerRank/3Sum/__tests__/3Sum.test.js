'use strict';

const threeSum = require('../3Sum.js');

describe('Given an array of integers, return an array with every unique combination of 3 numbers which add up to 3', () => {
    function sum(matrix){
        let isTrue = false;
        if(matrix.length > 1){
            for(let i = 0; i < matrix.length; i++){
                let sum = 0;
                for(let k = 0; k < matrix[i].length; k++){
                    sum += matrix[i][k];
                }
                if(sum === 0){
                    isTrue = true;
                }
            }
        } 
        else {
            let sum = 0;
            for(let i = 0; i < matrix[0].length; i++){
                sum += matrix[0][i];
            }
            if(sum === 0){
                isTrue = true;
            }
        }
        return isTrue;
    }
    
    it('should should return an matrix of length 2', async () => {
        const arr = [-1,0,1,2,-1,-4];
        let returnValue = await threeSum(arr);
        expect(returnValue).toHaveLength(2);

    });
    it('should work with sample input', () => {
        const arr = [-1,0,1,2,-1,-4];
    expect(sum(threeSum(arr))).toBeTruthy();
    });
    it('should contain array with expected individual elements', () => {
        const arr = [-1,0,1,2,-1,-4];
        let response = threeSum(arr);
        expect(response[1]).toEqual(expect.arrayContaining([-1,-1,2]));   
        expect(response[0]).toEqual(expect.arrayContaining([1,0,-1]));     
    });
    it('should return true if sum function is supplied two arrays equaling 0', () => {
        expect(sum([[1,0,-1],[-1,-1,2]])).toBeTruthy();
    });
    it('should work with two zeros', () => {
        const arr = [-1,0,1,0];
        const response = threeSum(arr);
        expect(sum(response)).toBeTruthy();
    });

});