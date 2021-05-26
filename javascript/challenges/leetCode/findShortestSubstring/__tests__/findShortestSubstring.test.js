const findShortestSubstring = require('../findShortestSubstring.js');

describe('Basic test of findShortestSubstring', () => {
    it('should import findShortestSubstring', () => {

        expect(findShortestSubstring()).not.toBeNull();
    });
    
    it('should just join things if there\'s nothing to do', () => {
        
// Input: words = ["alex","loves","leetcode"]
// Output: "alexlovesleetcode"
        let words = ["alex","loves","leetcode"];
        let output = "alexlovesleetcode";
        expect(findShortestSubstring(words)).toStrictEqual(output);
    });
    it('should reduce string as much as possible', () => {
     let words = ["catg","ctaagt","gcta","ttca","atgcatc"];
     let output = "gctaagttcatgcatc";

        expect(findShortestSubstring(words)).toStrictEqual(output);
    });
});

