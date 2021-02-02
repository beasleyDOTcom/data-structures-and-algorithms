//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
'use strict';
const pushZeros = require('../moveZeros.js');

describe('write a funtion that given an array, moves all zeros to end of array', () => {
    it('should return [1,0] if given [0,1]', () => {
        let start = [0,1]
    expect(pushZeros(start)).toStrictEqual([1,0]);        
    });
    it('should handle more complex value types', () => {
        class Node{
            constructor(value, next){
                this.value = value;
                this.next = next;
            }
        }
        const zero = new Node(4, new Node(0, null))
        expect(pushZeros([0,zero, 0, 7])).toStrictEqual([zero, 7, 0,0]);
    });
    it('should return same array given if no zeros', () => {
        const zeros = [0,0,0,0,0];
        expect(pushZeros(zeros)).toStrictEqual(zeros);
    });

});