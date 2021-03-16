'use strict';

 function shuffle(nums, n) {
//iterate n times through all elements in nums using two pointers
    let result = [];
    for(let j = 0; j < n; j++){
        result.push(nums[j]);
        result.push(nums[j+n]);
        // result = result.concat([nums[j], nums[j+n]]);
    }
    return result;
};

module.exports = shuffle;