'use strict';


const pigLatin = require('../pigLatin.js');

describe('should convert a lowercase word to piglatin', () => {
    // pig 	 =>  igpay
    // banana =>  ananabay
    // school =>  oolschay
    // apple  =>  appleay
    // year   =>  yearay
    it('should turn pig to igpay', () => {
        expect(pigLatin('pig')).toStrictEqual('igpay');
    });
    it('should turn banana to ananabay', () => {
        expect(pigLatin('banana')).toStrictEqual('ananabay');
    });
    it('should turn school to oolschay', () => {
        expect(pigLatin('school')).toStrictEqual('oolschay');
    });
    it('should turn apple to appleay', () => {
        expect(pigLatin('apple')).toStrictEqual('appleay');
    });
    it('should turn year into yearay', () => {
        expect(pigLatin('year')).toStrictEqual('yearay')
    });
});