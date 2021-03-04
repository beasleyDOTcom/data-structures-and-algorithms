/*
given array of numbers
go through array and add them up

input  [1,2,3,4]
output [1,3,6,10]



initalize value sum as 0;
for every value in input array,
update sum to equal current value + sum;
push sum to result
return result
*/


function runningSum(nums){
    let sum = 0;
    const result = [];
    for(let i = 0; i < nums.length; i++){
        sum = sum+nums[i];
        result.push(sum);
    }
    return result;
}