'use strict';

function subtractProductAndSum(n){
    let arrayOfNums = Array.from(n.toString()).map(Number);
    let product = arrayOfNums[0];
    let sum = arrayOfNums[0];
    for(let i = 1; i < arrayOfNums.length; i++){
        let item = arrayOfNums[i];
        product *= item;
        sum += item;
    }
    return product - sum;
};

module.exports = subtractProductAndSum;