'use strict';

function sumStack(stack){
    let sum;
    if(stack.isEmpty()){
        return null;
    } else {
        sum = stack.pop();
    }
    while(!stack.isEmpty()){
        let current = stack.pop(); // returns .value() of node
        if(typeof(current) === typeof(sum)){
            sum += current;
        } else {
            return 'Error, different types';
        }
    }
    return sum;
}
module.exports = sumStack;