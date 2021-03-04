/*
problem domain: All numbers if provided array with exist twice except one, return the exception.
input [2,1,2]
output: 1;

input [2,2,1,1,3,4,4]
return 3;

algorithm:
look at everything once
if it exists in the set, remove it, else add it.
return only one that exists.

*/


// var singleNumber = function(nums) {
//     let obj = {};
//     for(let i = 0; i < nums.length; i++){
//         if(obj[nums[i]] === undefined){
//             obj[nums[i]] = nums[i];
//         } else {
//             delete obj[nums[i]];
//         }
//     }
//     return obj[Object.keys(obj)[0]];
// };

function singleNumber(nums){
    let seen = new Set();
    for(let i = 0; i < nums.length; i++){
        if(!seen.has(nums[i])){
            seen.add(nums[i]);
        } else {
            seen.delete(nums[i]);
        }
    }
    for(let item of seen) return item;
}



module.exports = singleNumber;