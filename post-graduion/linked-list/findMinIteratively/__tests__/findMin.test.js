'use strict';
const findMin = require('../findMin.js');
class LinkedList{
    constructor(head = null){
        this.head = head;
    }
    insert(val){
        this.head = new Node(val, this.head)
    }
}
class Node {
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}
describe('Return minimum value from linked list', () => {
    it('should return a number if given a linked list with number', () => {
        const list = new LinkedList();
        list.insert(4);
        list.insert(5);
        list.insert(88);
        list.insert(2);
        expect(typeof(findMin(list))).toBe('number');
    });
    it('should return minimum value from list of numbers', () => {
        const list = new LinkedList();
        list.insert(4);
        list.insert(5);
        list.insert(88);
        list.insert(2);
        expect(findMin(list)).toBe(2);
    });
    it('should return null if given a list with a null head', () => {
        const list = new LinkedList();
        expect(findMIn(list)).toBeNull();
    });
    it('should return 4 if given a list with one number', () => {
        const list = new LinkedList();
        list.insert(7);
        expect(findMin(list)).toBe(7);
    });
    it('should return 3 if given a list with 8 - > 3 -> null', () => {
        const list = new LinkedList();
        list.insert(3);
        list.insert(8);
        expect(findMin(list)).toBe(3);
    });
});