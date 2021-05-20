'use strict'

 function removeOuterParentheses(s){

    let startIndex = 0;
    let rightFacing = 0;
    let leftFacing = 0;
    let result = '';

    for(let i = 0; i < s.length; i++){
        let section = '';
        // update representation of situation
        if(s[i]==='('){
            rightFacing += 1;
        } else if(s[i] === ')'){
            leftFacing += 1;
        }
        // update section
        section += s[i];
        
        // if this is a decomposed section
        if(rightFacing === leftFacing){
            // if section is "()" don't push it (there's nothing left after removing outer parens)
            if(section.length !== 2){
                // add section without outer parentheses
                result += s.slice(startIndex + 1, i);
                //                          ( ()(()) )
                //                            ^    ^ 
                // starting at second index add string up until second to last index, copy string and add it to result.
            }
            // update start and end
            startIndex = i + 1;
        }
    }

    return result;
}

module.exports = removeOuterParentheses;