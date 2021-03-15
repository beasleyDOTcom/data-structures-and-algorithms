'use strict';
var kidsWithCandies = function(candies, extraCandies) {
    // first thought:
    // find highest;
    // iterate through list
    // - if current + extra candies >= highest --> results.push(true) 
    // - else results.push(false);

// first thought:
    let result = [];
    // find highest;
    // let highest = candies[0];
    let highest = Math.max(...candies);
    // for(let i = 1; i < candies.length; i++){
    //     if(candies[i] > highest){
    //         highest = candies[i];
    //     }
    // }
    // iterate through list
    for(let k = 0; k < candies.length; k++){
    // - if current + extra candies >= highest --> results.push(true) 
        if(candies[k]+extraCandies >= highest){
            result.push(true);
        } else {
    // - else results.push(false);
            result.push(false);
        }
    }
    return result;
};

module.exports = kidsWithCandies;