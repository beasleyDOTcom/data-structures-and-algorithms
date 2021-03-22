'use strict';

const count = require('../countConsistentStrings.js');

describe('should count number of words that can be made using only provided letters', () => {
    it('should pass first provided test', () => {
        let allowed = "ab";
        let words = ["ad","bd","aaab","baa","badab"];
        expect(count(allowed,words)).toStrictEqual(2);
    });
});