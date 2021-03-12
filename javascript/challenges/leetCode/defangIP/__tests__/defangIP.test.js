/*
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
*/
const defang = require('../defangIP.js');
const makeNum = i => {
    let num = '';
    for(let j = 0; j < i; j++){
        if(j % 3 === 0){
            num += '.';
        } else {
            num += '0';
        }        
    }
    return num;
}

describe('Defang an IP address', () => {
    it('should defang short and simple', () => {
        let ip = '1.1.1.1';
        expect(defang(ip)).toStrictEqual("1[.]1[.]1[.]1")
    });
    it('should defang normal looking ip address', () => {
        let ip = "255.100.50.0";
        expect(defang(ip)).toStrictEqual("255[.]100[.]50[.]0")
    });
    it('should return a string longer than 100, and have more than 3 periods', () => {
        expect(makeNum(1000).length).toBeGreaterThan(100);
        expect(makeNum(1000).match(/./g).length).toBeGreaterThan(99);
    });
    let number = makeNum(1000000);
    it('should make a BIG ip address to help test speed', () => {
        expect(defang(number).length).toBeGreaterThan(100)
    });
});