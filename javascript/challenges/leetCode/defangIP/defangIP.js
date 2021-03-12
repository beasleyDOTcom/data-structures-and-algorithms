'use strict';
/**
Input: address = "1.1.1.1"
Output:         "1[.]1[.]1[.]1"
find periods, add brackets around them
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function (address) {
    let newString = '';
    for (let i = 0; i < address.length; i++) {
        if (address[i] === '.') {
            newString += '[.]';
        } else {
            newString += address[i];
        }
    }
    return newString;
};


// const defangIPaddr = address => {
//     return address.replace(/\./g, '[.]');
// }
module.exports = defangIPaddr;