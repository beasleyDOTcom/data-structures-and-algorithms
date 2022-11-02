const bracketsDoMatch = require('../bracketsDoMatch.js');

describe('Basic test of bracketsDoMatch', () => {
    it('should fail with one bracket', () => {
        expect(bracketsDoMatch(")")).toBe(false);
    });
    it('should be true with one open and close pair', () => {
        expect((bracketsDoMatch("()"))).toBe(true);
    });
    it('should be true with encapselated pair', () => {
        expect((bracketsDoMatch("(())"))).toBe(true);
    });
    it('should be true with multiple encapsulated groupings', () => {
        expect((bracketsDoMatch("([{([])}]({[]})({}))"))).toBe(true);
    });
    it('should be false with lopsided pairs', () => {
        expect((bracketsDoMatch("{({[]}){()]}"))).toBe(false);
    });
});

