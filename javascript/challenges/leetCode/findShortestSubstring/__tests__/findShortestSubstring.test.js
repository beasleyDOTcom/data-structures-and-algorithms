const { findShortestSubstring, numOfSharedLetters, joinWords } = require('../findShortestSubstring.js');


describe('should test numOfSharedLetters', () => {
    it('should return "" if given words that don\'t combine', () => {
        expect(numOfSharedLetters('alex', 'loves').sharedLetters).toHaveLength(0);
    });
    it('should return hell if given seashell and hello', () => {
        expect(numOfSharedLetters('seashell', 'hello').sharedLetters).toStrictEqual('hell');
    });
    it('should return word with length 2 if given "pesche" and "hello"', () => {
        expect(numOfSharedLetters('pesche', 'hell0').sharedLetters).toHaveLength(2);
    });
    it('should return "he" if given "pesche" and "hello', () => {
        expect(numOfSharedLetters("pesche", "hello").sharedLetters).toStrictEqual('he');
    });
});

describe('should test joinWords', () => {
    it('should return "beasleyloves', () => {
        let array = ['beasley', 'loves','golden', 'gardens'];

        expect(joinWords(0,1,0, array)[array.length-1]).toStrictEqual('beasleyloves');
    });
    it('should join two words', () => {
        let array = ['seashell', 'hello','pizza', 'sticks'];
        expect(joinWords(0,1,4,array)[array.length-1]).toStrictEqual('seashello');
    });
});

describe('Basic test of findShortestSubstring', () => {
    it('should import findShortestSubstring', () => {

        expect(findShortestSubstring([], '')).not.toBeNull();
    });

    it('should just join things if there\'s nothing to do', () => {

        // Input: words = ["alex","loves","leetcode"]
        // Output: "alexlovesleetcode"
        let words = ["alex", "loves", "leetcode"];
        let output = "alexlovesleetcode";
        expect(findShortestSubstring(words, '')).toHaveLength(output.length);
    });
    it('should reduce string as much as possible', () => {
        let words = ["catg", "ctaagt", "gcta", "ttca", "atgcatc"];
        let output = "gctaagttcatgcatc";

        expect(findShortestSubstring(words, '')).toHaveLength(output.length);
    });
    it('should work with input that\'s easier to read', () => {
        let input = ['shell', 'hello', 'oh', 'bombs'];
        expect(findShortestSubstring(input)).toHaveLength(11);
    });
    it('should pass perform as expected with an array of two', () => {
        let input = ['hello', 'shell'];
        expect(findShortestSubstring(input)).toStrictEqual('shello');
    });
    it('should produce same result if array is rearranged', () => {
        let input = ['shell', 'hello'];
        expect(findShortestSubstring(input)).toStrictEqual('shello');        
    });

    // so the failure of this test has me questioning my path to a solution. 
    // I thought that joining the words by order of how many letters they share consecutively would create the shorted substring but.. it's not.
    // what's happening? 
    // abcdef
    //    defab --> abcdefab --> 3 shared letters
    //          efde  --> zero letters 
    // total of 3 shared letters
    // efde
    //   defab
    //      abcdef
    // total of four shared letters
    // in conclusion, seeking the match with the most shared letters does not, in some cases, return the shortest string.

    // instead the solution for this might need to be a different form of brute force. 
    // this could call numSharedLetters and join with every combination of words then search through the results array and return the shortest string. 
    it('should pass this test from leetcode', () => {
        let input = ["abcdef","efde","defab"];
        let expected = "efdefabcdef";
        // received    "efdeabcdefab"
        expect(findShortestSubstring(input)).toStrictEqual(expected);
    });
});

