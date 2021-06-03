'use strict';

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

    let shortest = words.join('');// 'everysinglewordinwordsjustaddedtogether'
    // join every possible combination of words and compare it with shortest
    // return the shortest string in resultsArray
    function _helper(array, string){
// what is your base case here? 
        for(let i = 0; i < array.length; i++){
            let front = array.slice(0,i);
            let back = array.slice(i+1)
            let arrayWithoutCurrentIndex = front.concat(back)
        }

    }

} 


 module.exports = {findShortestSubstring, numOfSharedLetters, joinWords}
