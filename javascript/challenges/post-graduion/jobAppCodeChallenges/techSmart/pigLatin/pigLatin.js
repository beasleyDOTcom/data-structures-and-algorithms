// Provide a program that solves the following problem 
// (either in pseudo-code, or the language of your choice)

// You have a given word. You want to transform it into Pig Latin. 
// To do so, all letters before the initial vowel (a, e, i, o, u or y) are placed at the end of the word sequence. 
// Then, "ay" is added to the end of the word. 

// pig 	 =>  igpay
// banana =>  ananabay
// school =>  oolschay
// apple  =>  appleay
// year   =>  yearay

// You may use: string indexing/single character operations, lists, list length, loops, string concatenation
// You may not use: string slicing/multi-character operations, recursion

// It helps to turn off auto-correct in Google Docs for this activity. 
// You can find the settings in the menu under Tools > Preferences (we'll remind you to change them back at the end)


// problem domain:
// one word, only word chars
// given a word as a string, return that word in pig latin. 

// algorithm:
// X -> determine which section of chars you need to move
// X -> move all chars after that to the string you are building
// X -> add the chars you previously removed to the string you are building
// X -> add "ay" to the string you are building
// return string you built



function convertToPigLatin(string) {
    let newString = '';
    let lettersBeforeFirstVowel = '';
    let obj = {};
    obj['a'] = true;
    obj['e'] = true;
    obj['i'] = true;
    obj['o'] = true;
    obj['u'] = true;
    obj['y'] = true;
    // i
    // i = 2
    let flag = true;
    let i = 0;
    while (flag && i < string.length) {
        if (obj[string[i]]) {
            flag = false;
        }
        else {
            lettersBeforeFirstVowel += string[i];
            i++;
        }
    }
//pig
    for (let k = i; k < string.length; k++) {
        newString += string[k];
    }
    newString += lettersBeforeFirstVowel;
    newString += 'ay';

    return newString;
}
module.exports = convertToPigLatin