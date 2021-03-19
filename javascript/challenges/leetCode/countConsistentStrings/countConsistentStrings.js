function countConsistentStrings(charsAllowed, words) {
    
    let obj = {};
    
    for (let i = 0; i < charsAllowed.length; i++) {
        obj[charsAllowed[i]] = true;
    }

    let count = 0;
    
    words.forEach(word => {
        for (let k = 0; k < word.length; k++) {
            if (obj[word[k]] !== true) {
                return;
            }
        }
        count++;
    })
    
    return count;
}
module.exports = countConsistentStrings;