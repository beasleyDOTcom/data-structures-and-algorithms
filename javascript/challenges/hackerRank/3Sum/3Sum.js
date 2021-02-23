'use strict';
function threeSum(nums) {
    // how many unique triplets of numbers add up to 0? 
    
    if(nums.length < 3){ return [];}
    // do three numbers add up to 0?
    // if so, sort three numbers and check if it already exists as key in obj, if not, add sorted array as key to obj[-1,0,1]=true;
    let result = [];;
    let numHash = {};
    for(let i = 0; i < nums.length; i++){
        if(numHash[nums[i]] === undefined){
            numHash[nums[i]] = 0;
        }
        numHash[nums[i]]++;
    }
console.log(numHash)
    let obj = {};
    for(let a = 0; a < nums.length; a++){
        for(let b = 0; b < nums.length; b++){
            if(a !== b ){
                let difference = nums[a] + nums[b];
                if(difference !== 0){difference *= -1}
                let trio = [nums[a],nums[b],difference].sort()
                
                if(numHash[difference] !== undefined && obj[trio] === undefined){                  
    // there is a number in our hash that matches our target number and this combonation hasn't been acheived yet.
    // what else do we need to know at this point?
    // So the main thing here is that I'm not using a number more times than it exists in the array. 
    // so check to see if you are using the same number as the difference
    // if you are, make sure you have enough
                   
                    if(nums[a] === difference || nums[b] === difference){
                        if(nums[a] === nums[b] && numHash[difference] > 2){
                            result.push(trio);
                            obj[trio] = true;
                        } 
                        else if(nums[a] === difference && numHash[difference] > 1){
                            result.push(trio);
                            obj[trio] = true;
                        }
                        else if(nums[b] === difference & numHash[difference] > 1){
                            result.push(trio);
                            obj[trio] = true;
                        }
                    } else {
                        result.push(trio);
                        obj[trio] = true;
                    }
                }                         
            }
        }
    }
  return result;
};

module.exports = threeSum;