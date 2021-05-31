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
        console.log('made it')
        indexOfSecondWordInFirst = firstWord.search(regex);
        return { longestWord: frontTestWord, indexOfSecondWordInFirst };
    } else {
        frontTestWord = '';
        indexOfSecondWordInFirst=0;
    }
    // let longestWord = frontTestWord.length > backTestWord.length ? frontTestWord : backTestWord;
    return { longestWord: frontTestWord, indexOfSecondWordInFirst };
}


function joinWords(indexOne, indexTwo, indexOfSecondWordInFirst, array){
    console.log('joinWords:     ',array)

  let first = array[indexOne];
  let second = array[indexTwo];

  if(indexOne > indexTwo){
    array.splice(indexOne, 1);
    array.splice(indexTwo, 1);
  } else {
    array.splice(indexTwo, 1);
    array.splice(indexOne, 1);
  }
    console.log('after splice: ', array)

  if (indexOfSecondWordInFirst === 0){
    array.push(first + second);
  } else {
    array.push(first.substring(0, indexOfSecondWordInFirst) + second);
  }
  console.log('after concatenating: ', array)
  return array
}



function findShortestSubstring(words){

    if(words.length === 1){
        return words[0];
    } else if(words.length < 2){
      return '';
    }

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





    
    while(words.length > 1){
        for(let i = 0; i < words.length; i++){
            // shell
            let left = words[i];
            bestYet.left.index = i;

            for(let k = 0; k < words.length; k++){
                if(i === k){ break } // don't compare same word
                let right = words[k];// hello
                // how many consecutive letters does right share with left?
                let current = numOfSharedLetters(left, right);
    
                // does this word share more letters with words[i] than best?
                if(current.longestWord.length > bestYet.count){
                    bestYet.left.word = left;
                    bestYet.left.indexInWords = i;
                    bestYet.right.word = right;
                    bestYet.right.indexInWords = k;
                    bestYet.count = current.longestWord.length;
                    bestYet.indexOfRightInLeft = current.indexOfSecondWordInFirst;
                }
            }
        }

        joinWords(bestYet.left.indexInWords, bestYet.right.indexInWords, bestYet.indexOfRightInLeft, words);

    } 

    return words;

} 


 module.exports = {findShortestSubstring, numOfSharedLetters, joinWords}



/*

    function numOfSharedLetters(firstWord, secondWord) {
        // takes in two words and returns the number of consecutive letters the second word shares with the first.
        // hello -> shell --> 4
        // h -> he -> hel -> hell
        let regex;
        let frontTestWord = '';
        for (let i = 0; i < secondWord.length; i++) {
            regex = new RegExp(frontTestWord + secondWord[i], 'gm')
            if (regex.test(firstWord, 'gm')) {
                frontTestWord += secondWord[i];
            } else {
                break;
            }
        }

        regex = new RegExp(frontTestWord, 'gi')
        let indexOfSecondWordInFirst = firstWord.search(regex);
        // let longestWord = frontTestWord.length > backTestWord.length ? frontTestWord : backTestWord;
        return { longestWord: frontTestWord, indexOfSecondWordInFirst };
    }
    */