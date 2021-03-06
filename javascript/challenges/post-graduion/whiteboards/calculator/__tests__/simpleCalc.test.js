'use strict';
const Calculator = require('../simpleCalc.js');
const basicCalc = new Calculator();
describe('test basic calc operations seperated by a space', () => {
    it('should return 45 if given "45"', () => {
        expect(basicCalc.evaluate('45')).toBe(45);
    });
    it('should multiply', () => {
        expect(basicCalc.evaluate('4 * 4')).toBe(16);
    });
    it('should divide', () => {
        expect(basicCalc.evaluate('16 / 4')).toBe(4);
    });
    it('should add', () => {
        expect(basicCalc.evaluate('2 + 2')).toBe(4);
    });
    it('should subtract', () => {
        expect(basicCalc.evaluate('101 - 32')).toBe(69);
    });
    it('should perform more complicated math', () => {
        expect(basicCalc.evaluate('2 + 2 * 4 + 2 / 2 - 10')).toBe(1);
    });
});