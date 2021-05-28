const { findShortestSubstring, numOfSharedLetters, joinWords } = require('../findShortestSubstring.js');


describe.only('should test numOfSharedLetters', () => {
    it('should return "" if given words that don\'t combine', () => {
        expect(numOfSharedLetters('alex', 'loves').longestWord).toHaveLength(0);
    });
    it('should return hell if given seashell and hello', () => {
        expect(numOfSharedLetters('seashell', 'hello').longestWord).toStrictEqual('hell');
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
        expect(findShortestSubstring(input)).toHaveLength(11)
    });
});

