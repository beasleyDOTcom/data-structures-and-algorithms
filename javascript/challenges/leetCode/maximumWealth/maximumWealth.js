'use strict';

function maximumWealth(accounts){
    let max = 0;
    for(let j = 0; j < accounts.length; j++){
        let current = 0;
        for(let k = 0; k < accounts[j].length; k++){
            current += accounts[j][k];
        }
        if(current > max){
            max = current;
        }
    }
    return max;
}
module.exports = maximumWealth;