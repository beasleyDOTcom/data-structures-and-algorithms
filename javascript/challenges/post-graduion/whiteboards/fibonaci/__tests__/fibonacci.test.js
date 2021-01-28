const addUp = require('../fibonacci.js');

it('should return a number', () => {
    expect(typeof(addUp(3))).toBe('number');
});
it('should return 3 if called with 5', () => {
    expect(addUp(5)).toBe(3);
});
it('should return 1 if called with 2', () => {
    expect(addUp(2)).toBe(1);
});
it('should return "not a fibonacci number! Please enter an integer equal to or higher than 1" if called with a non fibonacci number', () => {
    expect(addUp(0)).toBe('not a fibonacci number! Please enter an integer equal to or higher than 1');
});