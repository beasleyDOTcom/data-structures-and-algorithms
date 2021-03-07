'use strict';

const shortEncode = require('../shortEncodeWords.js');

describe('should return length of shortest encode possible', () => {
    it('should return 2 if given [t]', () => {
        expect(shortEncode(['t'])).toBe(2);
    });
    it('should return 10 if given ["time", "me", "bell"]', () => {
        expect(shortEncode(["time", "me", "bell"])).toBe(10);
    });
    it('should return 5 if given ["me", "time"]', () => {
        expect(shortEncode(["me", "time"])).toBe(5);
    });
    it('should return 5 if given ["time", "time", "time", "time"]', () => {
        expect(shortEncode(["time", "time", "time", "time"])).toBe(5);
    });
    it('should return 5 if given ["time", "me", "time"]', () => {
        expect(shortEncode(["time", "me", "time"])).toBe(5);
    });
    it('should return 12 if given ["time", "atime", "btime"]', () => {
        expect(shortEncode(["time", "atime", "btime"])).toBe(12);
    });
});