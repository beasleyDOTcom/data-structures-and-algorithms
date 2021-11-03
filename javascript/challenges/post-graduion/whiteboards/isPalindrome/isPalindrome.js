'use strict';



/*
problem domain:
create a function that determines if a string is a palindrome
sample: 
google -> false
Racecar -> true
eye -> true
pat tap -> true
input will be upper or lowercase a - z
string may have length of 0
Algorithm:
look at each word starting at the beginning and end
compare each character for equality
if char is the same, continue on looking at the characters closer to the middle
if not, then return false
if you have reached a point at which you are looking at the same index, return true

*/
function isPalindrome(str) {
if(str.length <= 1 ){
  return true;
}
let frontIndex = 0; 
let backIndex = str.length -1;

while(frontIndex <= backIndex){ 
  
  if(str[frontIndex].toLowerCase() !== str[backIndex].toLowerCase()){
    return false;
  }
  else{
    frontIndex++;
    backIndex--;
  }
}
return true;
}
 module.exports = isPalindrome
