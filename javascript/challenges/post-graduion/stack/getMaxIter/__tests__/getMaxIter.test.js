'use strict';
const Stack = require('../getMaxIter.js');
describe('the getMax() method should return the number with the highest value from the stack.. iteratively.', () => {
    it('should return a number', () => {
        const numberStack = new Stack();
        numberStack.push(1);
        expect(typeof(numberStack.getMax())).toBe('number')
    });
    it('should return number if stack only has one number.', () => {
        const numberStack = new Stack();
        numberStack.push(1);
        expect(numberStack.getMax()).toBe(1);
    });
    it('should return highest number from stack of many numbers', () => {
        const numberStack = new Stack();
        numberStack.push(1);
        numberStack.push(11);
        numberStack.push(111);
        numberStack.push(122);
        numberStack.push(12);
        numberStack.push(144);
        numberStack.push(1455);
        expect(numberStack.getMax()).toBe(1455);
    });
    it('should return null if stack is empty', () => {
        const numberStack = new Stack();
        expect(numberStack.getMax()).toBeNull();
    });
    it('should allow pop() and peek() to work as expected', () => {
        const numberStack = new Stack();
        numberStack.push(1);
        numberStack.push(11);
        numberStack.push(111);
        numberStack.push(122);
        numberStack.push(12);
        numberStack.push(144);
        numberStack.push(1455);
        expect(numberStack.pop()).toBe(1455);
        expect(numberStack.pop()).toBe(144);
        expect(numberStack.pop()).toBe(12);
        expect(numberStack.peek()).toBe(122);
    });
});