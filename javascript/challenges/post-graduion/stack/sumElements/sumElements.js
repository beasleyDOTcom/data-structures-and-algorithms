'use strict';

function sumStack(stack){
    let sum = 0;
    while(!stack.isempty()){
        let current = stack.pop(); // returns .value() of node
        sum += current;
    }
    return sum;
}