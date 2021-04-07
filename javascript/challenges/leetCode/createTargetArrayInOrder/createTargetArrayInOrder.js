'use strict';
// REFACTORED
function createTargetArray(nums, index){

    let result = [nums[0]];
    
    for(let i = 1; i < nums.length; i++){
       i === index[i] ?  result.push(nums[i]) : result.splice(index[i], 0, nums[i]) ;
    }
    return result;
}



//  FIRST TRY 
//function createTargetArray(nums, index){

//     let result = [nums[0]];
    
//     for(let i = 1; i < nums.length; i++){
//        result.splice(index[i], 0, nums[i]);
//     }
//     return result;
// }

module.exports = createTargetArray;