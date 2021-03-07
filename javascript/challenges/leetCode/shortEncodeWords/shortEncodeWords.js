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
    words = [...new Set(words)] // remove copies of word
    let newString = '';
    for(let i = 0; i < words.length; i++){
        let word = words[i];
        let regex = new RegExp(word+'$') // word at end of test string. 
        let wordFitsAtEnd = false;
        for(let k = 0; k < words.length; k++){

            if(i !== k && regex.test(words[k])){  
// the word in our regex exists at the end of another word and doesn't need to be added
                wordFitsAtEnd = true;
            }
        }
// now we have looked at every word and can decide if we should add this word to newString
        if(!wordFitsAtEnd){
            newString += word+'#'
        }
    }    
    return newString.length;
};

module.exports = minimumLengthEncoding;