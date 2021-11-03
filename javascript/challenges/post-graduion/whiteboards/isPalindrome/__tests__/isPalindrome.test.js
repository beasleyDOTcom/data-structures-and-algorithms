const isPalindrome = require('../isPalindrome.js');


/*
const stringOne = "Google";
const stringTwo = "Racecar";
const stringThree = "eye";
const stringFour = "patTap";

// should return false
console.log(isPalindrome(stringOne));
// should return true
console.log(isPalindrome(stringTwo));
// should return true
console.log(isPalindrome(stringThree));
  console.log(isPalindrome(stringFour));
  */
describe('Basic test of isPalindrome', () => {
    it('should return true if given empy string', () => {
        expect(isPalindrome("")).toBe(true);
    });
    it('should return true if given a single char', () => {
        expect(isPalindrome("a")).toBe(true);
    });
    it('should return false if word is not palindrome', () => {
        expect(isPalindrome("Google")).toBe(false);
    });
    it('should return true if given palindrome with upppercase letters', () => {
        expect(isPalindrome("PatTap")).toBe(true);
    });
    it('should return true if given palindrome with even number of letters', () => {
        expect(isPalindrome("Racecar")).toBe(true);
    });
    it('should return true if given palindrome with odd number of letters', () => {
        expect(isPalindrome("pattap")).toBe(true);
    });
});

