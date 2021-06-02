'use strict'
// Given an array of strings words, return the smallest string that contains each string in words as a substring. If there are multiple valid strings of the smallest length, return any of them.

// You may assume that no string in words is a substring of another string in words.

// Example 1:

// Input: words = ["alex","loves","leetcode"]
// Output: "alexlovesleetcode"
// Explanation: All permutations of "alex","loves","leetcode" would also be accepted.
// Example 2:

// Input: words = ["catg","ctaagt","gcta","ttca","atgcatc"]
// Output: "gctaagttcatgcatc"
 

// Constraints:

// 1 <= words.length <= 12
// 1 <= words[i].length <= 20
// words[i] consists of lowercase English letters.
// All the strings of words are unique.
/*
this is an interesting problem! 
find the two words that share the most letters in order, and then combine them recursively until words is empty
input: ['shell', 'hello', 'oh', 'bombs']
output: 'bombshelloh'
*/

function numOfSharedLetters(firstWord, secondWord) {
    // takes in two words and returns the number of consecutive letters the second word shares with the first.
    // hello -> shell --> 3
    // h -> he -> hel -> hell
    let regex;
    let frontTestWord = '';
    if(firstWord === '' || secondWord === ''){
        return
    }
    for (let i = 0; i < secondWord.length; i++) {
        regex = new RegExp(frontTestWord + secondWord[i], 'gm')
        if (regex.test(firstWord, 'gm')) {
            frontTestWord += secondWord[i];
        } else {
            break;
        }
    }

    regex = new RegExp(frontTestWord + '$', 'gi')
    let indexOfSecondWordInFirst;
    if(regex.test(firstWord)){
        indexOfSecondWordInFirst = firstWord.search(regex);
        return { sharedLetters: frontTestWord, indexOfSecondWordInFirst };
    } else {
        frontTestWord = '';
        indexOfSecondWordInFirst=0;
    }
    // let longestWord = frontTestWord.length > backTestWord.length ? frontTestWord : backTestWord;
    return { sharedLetters: frontTestWord, indexOfSecondWordInFirst };
}


function joinWords(indexOne, indexTwo, indexOfSecondWordInFirst, array){

  let first = array[indexOne];
  let second = array[indexTwo];

  if(indexOne > indexTwo){
    array.splice(indexOne, 1);
    array.splice(indexTwo, 1);
  } else {
    array.splice(indexTwo, 1);
    array.splice(indexOne, 1);
  }

  if (indexOfSecondWordInFirst === 0){
    array.push(first + second);
  } else {
    array.push(first.substring(0, indexOfSecondWordInFirst) + second);
  }
  return array
}



function findShortestSubstring(words){

    if(words.length === 1){
        return words[0];
    }
    while(words.length > 1){// greater than one because the last time this runs it will join the last two indexes.

        let bestYet = {
            count: 0,
            indexOfRightInLeft: null,
            left: {
                word: null,
                indexInWords: null
            },
            right: {
                word:null,
                indexInWords: null
            }
        };

        for(let i = 0; i < words.length; i++){
            // this looks at each word in the words array
            let left = words[i]; // 'shell' --> 'hello'
            // bestYet.left.index = i;
                // this 
            for(let k = 0; k < words.length; k++){
                if(i !== k){ // don't compare same inde of words with itself
                    let right = words[k]; //hello --> 'shell'
                    // how many consecutive letters does the front of right share with the back of left?
                    let current = numOfSharedLetters(left, right);
                    
                    // does this word share more letters with words[i] than best?
                    if(current.sharedLetters.length > bestYet.count){
                        bestYet.left.word = left;
                        bestYet.left.indexInWords = i;
                        bestYet.right.word = right;
                        bestYet.right.indexInWords = k;
                        bestYet.count = current.sharedLetters.length;
                        bestYet.indexOfRightInLeft = current.indexOfSecondWordInFirst;
                    }
                }
            }
        }
        if(bestYet.count > 0){
            joinWords(bestYet.left.indexInWords, bestYet.right.indexInWords, bestYet.indexOfRightInLeft, words);
        } else {
            let noSharedLetters = words.reduce((acc, val) => {
                return acc += val;
            }, '')
            return noSharedLetters;
        }

    } 

    return words[0];
} 


 module.exports = {findShortestSubstring, numOfSharedLetters, joinWords}
