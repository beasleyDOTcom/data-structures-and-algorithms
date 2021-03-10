'use strict';

const sumVal = require('../sumValRecur.js');

class Node{
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head;
    }
    add(val){
        this.head = new Node(val, this.head);
    }
}
describe('Given a linked list retun the sum of all elements', () => {
// does this mean 'a' + 'a' = 'aa' ? or just numbers? --> both are possible
    it('should sum 1 + 1', () => {
        const list = new LinkedList();
        list.add(1);
        list.add(1);
        expect(sumVal(list)).toBe(2);
    });
    it('should return cape for "c" "a" "p" "e"', () => {
        const list = new LinkedList();
        list.add("e");
        list.add("p");
        list.add("a");
        list.add("c");
        expect(sumVal(list)).toBe('cape')
    });
    it('should return null if empty list', () => {
        const list = new LinkedList();
        expect(sumVal(list)).toBeNull();
    });
    it('should throw Error() "Sorry, cannot sum unsupported values." if given a list with values that are not numbers or strings', () => {
        const list = new LinkedList();
        list.add(new Node('pizza'));
        list.add(new Node('I miss you'));
        expect( () => sumVal(list)).toThrow('Sorry, cannot sum unsupported values.');
    });
    it('should throw error Sorry, switching types is unsupported at this time,', () => {
        const list = new LinkedList();
        list.add('a');
        list.add(1);
        expect(() => sumVal(list)).toThrow('Sorry, switching types is unsupported at this time')
    });

});