/*
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
*/
const defang = require('../defangIP.js');

describe('Defang an IP address', () => {
    it('should defang short and simple', () => {
        let ip = '1.1.1.1';
        expect(defang(ip)).toStrictEqual("1[.]1[.]1[.]1")
    });
    it('should defang normal looking ip address', () => {
        let ip = "255.100.50.0";
        expect(defang(ip)).toStrictEqual("255[.]100[.]50[.]0")
    });
});