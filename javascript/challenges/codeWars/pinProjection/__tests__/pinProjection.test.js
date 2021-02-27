const pin = require('../pinProjection.js');

it('should handle one character', () => {
    expect(pin('8')).toStrictEqual(expect.arrayContaining(["5", "7", "8", "9", "0"]))
});
it('should handle two characters', () => {
    expect(pin('00')).toStrictEqual(expect.arrayContaining(['08','80','00','88']))
});
it('should work with 11', () => {
    expect(pin('11')).toStrictEqual(expect.arrayContaining(["11", "22", "44", "12", "21", "14", "41", "24", "42"]))
});
it('should work with 369', () => {
    expect(pin('369')).toStrictEqual(expect.arrayContaining(["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]))
});