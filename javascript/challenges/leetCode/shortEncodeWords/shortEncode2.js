/**
 * @param {string[]} words
 * @return {number}
Input: words = ["time", "me", "bell"]
Output: 10
Explanation: A valid encoding would be s = "time#bell#" and indices = [0, 2, 5].
words[0] = "time", the substring of s starting from indices[0] = 0 to the next '#' is underlined in "time#bell#"
words[1] = "me", the substring of s starting from indices[1] = 2 to the next '#' is underlined in "time#bell#"
words[2] = "bell", the substring of s starting from indices[2] = 5 to the next '#' is underlined in "time#bell#"
 */
var minimumLengthEncoding = function (words) {
    let oneWord = [...new Set(words)]
    if(oneWord.length === 1){
        return words[0].length+1;
    }
    let newString = '';
    let indeces = [];
    for (let j = 0; j < words.length; j++) {
        words[j] = words[j] + '#';
    }

    words.forEach(word => {
        // does this word match the ending of another word?
        let found = false;
        for (let i = 0; i < words.length; i++) {
//            console.log('word:', word, ' word[i]', words[i], (word !== words[i] && words[i].slice(-word.length) === word))  
            console.log('slice: ', words[i].slice(-word.length), word,words[i])
            if (word !== words[i] && words[i].slice(-word.length) === word) {
                found = true;
                indeces.push(words[i].length - word.length);
            }
        }
        if (!found) { // if it's found we don't need to add it because it's included in another word
            indeces.push(newString.length);
            newString += word;
        }
    })
    //  console.log('indeces:', indeces)
    //  console.log('new string:', newString)
    //  console.log('words: ', words)
     return indeces.length === words.length ? newString.length : 0;

};

module.exports = minimumLengthEncoding;