'use strict';

function numOfSharedLetters(firstWord, secondWord) {
    // takes in two words and returns the number of consecutive letters the second word shares with the first.
    // hello -> shell --> 3
    // h -> he -> hel -> hell
    let regex;
    let frontTestWord = '';
    if(firstWord === ''){
        return {sharedLetters: '', indexOfSecondWordInFirst: 0};
    } else if (secondWord === ''){
        return {sharedLetters: '', indexOfSecondWordInFirst: firstWord.length};
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

function joinWords(firstWord, secondWord, indexOfSecondWordInFirst){
    if ( indexOfSecondWordInFirst === 0){
        return firstWord + secondWord;
    } else {
        return firstWord.substring(0, indexOfSecondWordInFirst) + secondWord;
    }
}


function returnArrayWithoutValueAtIndex(index, array){
    let front = array.slice(0,index);
    let back = array.slice(index+1);
    return front.concat(back);
  }

function findShortestSubstring(words){

    let shortest = words.join('');// 'everysinglewordinwordsjustaddedtogether'
    // join every possible combination of words and compare it with shortest
    // return the shortest string created;

    function _helper(array, string){
        // what is your base case here? --> one word in array
        // when there is one word in array, what should happen? 
        // --> join last word with string and then compare/replace final string with best
        if(array.length === 1){
            let sharedLettersObject = numOfSharedLetters(string, array[0]);
            let currentString = joinWords(string, array[0], sharedLettersObject.indexOfSecondWordInFirst);
            if(currentString.length < shortest.length){
                shortest = currentString;
            }
            return;
        }
        // otherwise, call _helper with 
        for(let i = 0; i < array.length; i++){
            let arrayWithoutCurrentIndex = returnArrayWithoutValueAtIndex(i, array);
            let sharedLettersObject = numOfSharedLetters(string, array[i]);
            let newString = joinWords(string, array[i], sharedLettersObject.indexOfSecondWordInFirst);
            _helper(arrayWithoutCurrentIndex, newString);
        }

    }
    _helper(words, '');
    return shortest;
} 


 module.exports = {findShortestSubstring, numOfSharedLetters, joinWords, returnArrayWithoutValueAtIndex}
