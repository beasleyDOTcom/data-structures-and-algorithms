'use strict';
/*
simplist way seems to be performing the steps and keeping track as you go. I think that's what I'll start with.
good use case for recursion.
UPDATE:
it appears to be faster to use a while loop for the iteration instead of recursion!
*/

//ATTEMPT NUMBER 2:
function numberOfSteps(num){
    let number = num;
    let count = 0;
    while(number >0){
        if(number % 2 === 1){
            number--;
        } else {
            number /= 2;
        }
        count++;
    }
    return count;
}



// ATTEMPT NUMBER 1:

// function numberOfSteps(num){
    
//     let steps = 0;

//     function _helper(number){
//         //if num is 0 return number of steps
//         if(number === 0){
//             return;
//         } 
//         //if num is odd, subtract 1 from number    
//         else if(number % 2 === 1){
//             number--;
//             steps++;
//         } 
//         //else divide num by 2
//         else {
//             number /=2;
//             steps++;
//         }
//         // if it made it this far it needs to run again
//         _helper(number)
//     }
//     _helper(num);
//     return steps;
// }

module.exports = numberOfSteps;

// unrelated ... how do I create an alias for 