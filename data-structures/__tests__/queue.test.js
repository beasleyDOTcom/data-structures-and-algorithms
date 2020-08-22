'use strict'

const Queue = require('../stacksAndQueues/queue.js');
it('should be a class', () => {
    expect(Queue).toBeDefined();
});

it('should instantiate an empty stack', () => {
    const queue = new Queue();
    expect(queue).toBeDefined();
});

it('should successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue('peaches and cream');
    expect(queue.dequeue(queue)).toBe('peaches and cream');
});

it('should successfully enqueue multiple items into a queue', () => {
    const queue = new Queue();
    queue.enqueue('peaches and cream');
    queue.enqueue('rocky road');
    expect(queue.dequeue(queue)).toBe('peaches and cream');
});

it('should successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue('peaches and cream');
    queue.enqueue('rocky road');
    expect(queue.dequeue(queue)).toBe('peaches and cream');
    expect(queue.dequeue(queue)).toBe('rocky road');
});

