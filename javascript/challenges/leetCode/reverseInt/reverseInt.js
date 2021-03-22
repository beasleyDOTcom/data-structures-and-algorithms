'use strict';

function reverse(x){
    let isNegative = x <= 0; 
    let reversed = x.toString().split('').reverse();


    if(isNegative){
        reversed.pop();
    }

    reversed = parseFloat(reversed.join(''));
    
    if(reversed > Math.pow(-2, 31) && reversed < Math.pow(2,31)-1){
        return isNegative ? reversed*-1: reversed; 
    } else {
        return 0;
    }
}
module.exports = reverse;