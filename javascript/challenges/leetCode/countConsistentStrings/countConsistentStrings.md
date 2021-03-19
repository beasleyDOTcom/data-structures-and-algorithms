given a string and a bunch of words return number of words that can be made just using the letters in string provided.

# input / output:

string = 'ab';
array = ['d', 'bd', 'aaab', 'baa', 'badab'];

# algorithm:

I want to look at each word in array. 
if each letter in word is in string than "count" can be incremented if not, do nothing. 
hash each char that is allowed into an object
then go through each word and see if any letter in that word returns undefined if not, increment.

# code:

function countConsistentStrings(charsAllowed, words){
    let obj = {};
    for(let i = 0; i < charsAllowed.length; i++){
        obj[charsAllowed[i]] = true;
    }

    let count = 0;
    words.forEach(word => {
        for(let k = 0; k < words.length; k++){
            if(obj[word[k]] !== true){
                return;
            }
        }
        count++;
    })
    return count;
}
https://leetcode.com/problems/count-the-number-of-consistent-strings/