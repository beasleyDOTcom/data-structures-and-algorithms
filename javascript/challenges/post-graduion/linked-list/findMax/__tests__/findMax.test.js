//Given a Linked List, Find the maximium value ... Iteratively.
'use strict';

const findMax = require('../findMax.js');
class LinkedList {
    constructor(){
        this.head;
    }
    add(val){
        this.head = new Node(val, this.head);
    }
}
class Node{
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

describe('Find Maximum value in linked list', () => {
    it('should return null if given an empty list', () => {
        const list = new LinkedList();
        expect(findMax(list)).toBeNull();
    });
    it('should return 4 if given a linked list with only 4"s', () => {
        const list = new LinkedList();
        list.add(4);
        list.add(4);
        list.add(4);
        list.add(4);
        expect(findMax(list)).toBe(4)
    });
    it('should return maximum number in a list', () => {
        const list = new LinkedList();
        list.add(3);
        list.add(5);
        list.add(88);
        list.add(777);
        list.add(7);
        expect(findMax(list)).toStrictEqual(777);
    });
});