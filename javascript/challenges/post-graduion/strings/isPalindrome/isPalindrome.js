'use strict';

function isPalindrome(string) {

    let front = 0;//3
    let back = string.length - 1;//2
    while(front < back){
      if(string[front] !== string[back]){
        return false;
      }
      front++;
      back--;
    }
    return true;
  }
  
module.exports = isPalindrome;