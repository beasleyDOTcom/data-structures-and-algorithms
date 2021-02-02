'use strict';

module.exports = arr => {
    let zeros = 0;
    let result = [];
    arr.forEach(element =>{
        if(element === 0){
            zeros ++;
        } else {
            result.push(element)
        }
    })
    for(let i = 0; i < zeros; i++){
        result.push(0);
    };
    return result;
}