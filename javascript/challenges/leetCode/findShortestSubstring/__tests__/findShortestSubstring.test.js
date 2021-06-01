const { findShortestSubstring, numOfSharedLetters, joinWords } = require('../findShortestSubstring.js');


describe('should test numOfSharedLetters', () => {
    it('should return "" if given words that don\'t combine', () => {
        expect(numOfSharedLetters('alex', 'loves').longestWord).toHaveLength(0);
    });
    it('should return hell if given seashell and hello', () => {
        expect(numOfSharedLetters('seashell', 'hello').longestWord).toStrictEqual('hell');
    });
    it('should return word with length 2 if given "pesche" and "hello"', () => {
        expect(numOfSharedLetters('pesche', 'hell0').longestWord).toHaveLength(2);
    });
    it('should return "he" if given "pesche" and "hello', () => {
        expect(numOfSharedLetters("pesche", "hello").longestWord).toStrictEqual('he');
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
        expect(findShortestSubstring(input)).toHaveLength(11)
    });
});

