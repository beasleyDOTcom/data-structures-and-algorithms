'use strict'

const Stack = require('../stacksAndQueues/stack.js');
it('should be a class', () => {
    expect(Stack).toBeDefined();
});

it('should instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
});

it('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push('apples');
    expect(stack.peek()).toBe('apples');
});
//push peak pop isempty
it('should return true if the stack is empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);

});

it('should return false if the stack is not empty', () => {
    const stack = new Stack();
    stack.push('frosted flakes');
    expect(stack.isEmpty()).toBe(false);

});

it('should throw an error if pop is called on an empty stack', () => {
    const stack = new Stack();
  
    expect(() => stack.peek()).toThrow('Cannot peek empty list');
    expect(() => stack.peek()).toThrow(RangeError);

});
it('should throw an error if peek is called on an empty stack', () => {
    const stack = new Stack();
  
    expect(() => stack.pop()).toThrow('Cannot pop from empty stack');
    expect(() => stack.pop()).toThrow(RangeError);

});

it('should retrieve whatever is on top of the stack', () => {
    const stack = new Stack();
    stack.push('frosted flakes');
    stack.push('cinnamon toast crunch');
    expect(stack.pop()).toBe('cinnamon toast crunch');
});