'use strict'
//takes in an array and a value to be added
//without using any built in methods, return an array with the new value added at the middle index.
//find middle of array and save that index to a variable
//then insert the value into that middle index of the array.
function insertShiftArray(arr, val){
    let middle = Math.floor(arr.length/2);
    arr.splice(middle, 0, val)
    return arr;
}
    console.log(insertShiftArray([1,2,3,9,4,5,7], "Malcolm"))