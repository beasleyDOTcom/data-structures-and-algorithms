'use strict';

const sumQueue = require('../sumQueue.js');
const Queue = require('../queue.js');

describe('Given a Queue, return the sum of all values', () => {
    it('should return "queue was empty"', () => {
        const line = new Queue(); 
        expect(sumQueue(line)).toBe('queue was empty');
    });
    it('should return a number if queue has a number,', () => {
        const line = new Queue();
        line.enqueue(2);
        expect(typeof(sumQueue(line))).toBe('number');
    });
    it('should return 5 if line has 1, 2, and 2', () => {
        const line = new Queue();
        line.enqueue(1);
        line.enqueue(2);
        line.enqueue(2);
        expect(sumQueue(line)).toBe(5);
    });
    it('should work with positive and negative numbers', () => {
        const line = new Queue();
        line.enqueue(-100);
        line.enqueue(20);
        line.enqueue(2);
        line.enqueue(-2);
        line.enqueue(-10);
        line.enqueue(-10);
        const firstIn = line.dequeue();
        expect(firstIn).toBe(-100);
        expect(sumQueue(line)).toBe(0);

    });
});