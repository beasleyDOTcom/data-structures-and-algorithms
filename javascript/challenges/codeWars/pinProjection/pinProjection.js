'use strict';

function getPINs(observed) {

    const result = [];
    function replaceNumber(index, replacement, string) {
        if(index > 0){
            result.push(string.slice(0,index) + replacement + string.slice(index +1))
        } else {
            result.push(replacement + string.slice(1))            
        }
    }
    result.push(observed)

    for (let i = 0; i < observed.length; i++) {
        switch (observed[i]) {
            case '1':
                replaceNumber(i, '2', observed);
                replaceNumber(i, '4', observed);
                break;
            case '2':
                replaceNumber(i, '1', observed);
                replaceNumber(i, '5', observed);
                replaceNumber(i, '3', observed);
                break;
            case '3':
                replaceNumber(i, '2', observed);
                replaceNumber(i, '6', observed);
                break;
            case '4':
                replaceNumber(i, '1', observed);
                replaceNumber(i, '5', observed);
                replaceNumber(i, '7', observed);
                break;
            case '5':
                replaceNumber(i, '2', observed);
                replaceNumber(i, '4', observed);
                replaceNumber(i, '6', observed);
                replaceNumber(i, '8', observed);
                break;
            case '6':
                replaceNumber(i, '3', observed);
                replaceNumber(i, '5', observed);
                replaceNumber(i, '9', observed);
                break;
            case '7':
                replaceNumber(i, '4', observed);
                replaceNumber(i, '8', observed);
                break;
            case '8':
                replaceNumber(i, '5', observed);
                replaceNumber(i, '7', observed);
                replaceNumber(i, '9', observed);
                replaceNumber(i, '0', observed);
                break;
            case '9':
                replaceNumber(i, '8', observed);
                replaceNumber(i, '6', observed);
                break;
            default:
                replaceNumber(i, '8', observed);

        }
    }
    return result;
}

module.exports = getPINs;