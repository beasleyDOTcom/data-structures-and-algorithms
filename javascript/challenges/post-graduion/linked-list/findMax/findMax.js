'use strict';

module.exports = function findMax(linkedList){
    if(!linkedList.head){return null; }
    let max = linkedList.head.value;
    let cN = linkedList.head.next;
    while(cN){
        if(cN.value > max){
            max = cN.value;
        }
        cN = cN.next;
    }
    return max;
}