'use strict';
const basicCalc = require('../simpleCalc.js');

describe('test basic calc operations seperated by a space', () => {
    it('should return 45 if given "45"', () => {
        expect(basicCalc('45')).toBe(45);
    });
    it('should multiply', () => {
        expect(basicCalc('4 * 4')).toBe(16);
    });
    it('should divide', () => {
        expect(basicCalc('16 / 4')).toBe(4);
    });
    it('should add', () => {
        expect(basicCalc('2 + 2')).toBe(4);
    });
    it('should subtract', () => {
        expect(basicCalc('101 - 32')).toBe(69);
    });
    it('should perform more complicated math', () => {
        expect(basicCalc('2 + 2 * 4 + 2 / 2 - 10')).toBe(1);
    });
});