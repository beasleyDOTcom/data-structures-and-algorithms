'use strict'

 function removeOuterParentheses(s){

    let startIndex = 0;
    let rightFacing = 0;
    let leftFacing = 0;
    let decomposedSections = [];
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
                // push section into container
                decomposedSections.push(s.slice(startIndex, i+1));
            }
            // update start and end
            startIndex = i + 1;
        }
    }

    // at this point we have the string split into sections from which we need to now remove the outer parentheses

    for(let j = 0; j < decomposedSections.length; j++){

        let newSection = decomposedSections[j].slice(1, -1);

        //                          ( ()(()) )
        //                            ^    ^ 
        // starting at second index add string up until second to last index, copy string and add it to result.
        result += newSection
    }

    return result;
}

module.exports = removeOuterParentheses;