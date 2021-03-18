'use strict';

const shuffle = require('../shuffleString.js');

describe('should place rearrange string to indexes passed in with indeces array', () => {
    it('should pass first test', () => {
        let indices = [4,5,6,7,0,2,1,3];
        let string = 'codeleet';
        expect(shuffle(string,indices)).toStrictEqual('leetcode');
    });
    it('should pass second given test', () => {
        let indices = [0,1,2];
        let string = 'abc';
        expect(shuffle(string,indices)).toStrictEqual('abc');
    });
    it('should pass third provided test', () => {
        let string = "aiohn";
        let indices = [3,1,4,2,0];
        expect(shuffle(string,indices)).toStrictEqual("nihao");
    });
    it('should pass 4th provided test', () => {
        let string = "aaiougrt";
        let indices = [4,0,2,6,7,3,1,5];
        expect(shuffle(string,indices)).toStrictEqual("arigatou");
    });
});