'use strict';

const Stack = require('../stack.js');
const sumStack = require('../sumElements.js');

describe('given a stack find the sum of all elements', () => {
    it('should return null if given empty stack', () => {
        let stack = new Stack();
        expect(sumStack(stack)).toBeNull();
    });
    it('should return abcde if given a stack with "a" "b" "c" "d" "e"', () => {
        let stack = new Stack();
        stack.push('e');
        stack.push('d');
        stack.push('c');
        stack.push('b');
        stack.push('a');
        expect(sumStack(stack)).toStrictEqual('abcde');
    });
    it('should return 24 if given 6 fours', () => {
        let stack = new Stack();
        stack.push(4)
        stack.push(4)
        stack.push(4)
        stack.push(4)
        stack.push(4)
        stack.push(4)
        expect(sumStack(stack)).toStrictEqual(24);
    });
    it('should return "Error, different types" if asked to add two values that are not the same', () => {
        let stack = new Stack();
        stack.push(5);
        stack.push('5');
        stack.push(5)
        expect(sumStack(stack)).toBeNull('Error, different types');
    });
});