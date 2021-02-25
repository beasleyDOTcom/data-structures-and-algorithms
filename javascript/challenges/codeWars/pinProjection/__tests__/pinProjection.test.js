const pin = require('../pinProjection.js');

it('should handle one character', () => {
    expect(pin('8')).toStrictEqual(expect.arrayContaining(['0','9','7','5','8']))
});
it('should handle two characters', () => {
    expect(pin('00')).toStrictEqual(expect.arrayContaining(['08','80']))
});