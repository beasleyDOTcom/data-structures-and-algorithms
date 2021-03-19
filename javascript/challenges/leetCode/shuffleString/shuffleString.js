'use strict';

function restoreString(s,indices){
    let newString = new Array(indices.length); // array 
    for(let i = 0; i < indices.length; i++){
        newString[indices[i]] = s[i];
    }
    return newString.join('');
}

module.exports = restoreString;