'use strict';
function missingNumber(nums){
    let seen = new Set(nums);
    for(let i = 1; i <= nums.length; i++){
        if(!seen.has(i)){
            return i;
        }
    }

}

module.exports = missingNumber;