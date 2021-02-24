'use strict';
function threeSum(nums) {
    // how many unique triplets of numbers add up to 0? 
        //console.log('input: ',nums)
    if (nums.length < 3) { return []; }
    // do three numbers add up to 0?
    // if so, sort three numbers and check if it already exists as key in obj, if not, add sorted array as key to obj[-1,0,1]=true;
    let result = [];;
    let numHash = {};
    for (let i = 0; i < nums.length; i++) {
        if (numHash[nums[i]] === undefined) {
            numHash[nums[i]] = 0;
        }
        numHash[nums[i]]++;
    }
    nums = Object.keys(numHash);
    for (let i = 0; i < nums.length; i++) {
        nums[i] = parseInt(nums[i])
    }
   // console.log('numHash: ',numHash)
    console.log(nums)
    let obj = {};
 //   let size = nums.length > 1 ? Math.ceil(nums.length / 2) : 0;
    if (nums.length === 1 && nums[0] === 0) {
        let temp = [];
        if (numHash[nums[0]] > 2) {
            for (let i = 0; i < 3; i++) {
                temp.push(nums[0])
            }
            result.push(temp)
            return result;
        }

    }
    for (let a = 0; a < nums.length; a++) {
        for (let b = 0; b < nums.length; b++) {
   //         console.log(nums[a], nums[b])/// how do we not skip the numbers that have multiples that get skipped over right now?
            // after the hash, zero is first but A and B are equal and no work is done || if(numHash[a] === numHash[b] && numHash[a] > 2)
   //         if (a !== b) {
                let difference = nums[a] + nums[b];
                if (difference !== 0) { difference *= -1 }
                let trio = [nums[a], nums[b], difference].sort()

                if (numHash[difference] !== undefined && obj[trio] === undefined) {
                    // there is a number in our hash that matches our target number and this combonation hasn't been acheived yet.
                    // what else do we need to know at this point?
                    // So the main thing here is that I'm not using a number more times than it exists in the array. 
                    // so check to see if you are using the same number as the difference
                    // if you are, make sure you have enough
      //              console.log('difference: ',difference, 'numHash[difference]: ', numHash[difference], 'a: ', nums[a], 'b: ', nums[b])
                    if (nums[a] === difference || nums[b] === difference || nums[a] === nums[b]) {
                        if (nums[a] === nums[b]) {  // this should be handling the situation of having a = 0 and b = 0 to facilitate [0,0,0]
        //                    console.log('made it in here')
                            if(numHash[nums[b]]>2){
                                if (numHash[difference] > 2) {
                                    result.push(trio);
                                    obj[trio] = true;
                                }
                            }

                        }
                        else if (nums[a] === difference) {
                            if (numHash[difference] > 1) {
                                result.push(trio);
                                obj[trio] = true;
                            }
                        }
                        else if (nums[b] === difference) {
                            if (numHash[difference] > 1) {
                                result.push(trio);
                                obj[trio] = true;
                            }
                        }
                    } else {
                        result.push(trio);
                        obj[trio] = true;
                    }
                }
        //    }
        }
    }
    return result;
};

module.exports = threeSum;