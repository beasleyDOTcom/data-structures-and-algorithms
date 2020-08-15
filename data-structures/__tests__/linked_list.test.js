'use strict'

const LinkedList = require('../linkedList/linked-list.js');

it('should be alive', () => {
    const ll = new LinkedList();
    expect(ll).toBeDefined();
});

it('should assign value to head', () => {
    const ll = new LinkedList();
    ll.insert('jank');
    expect(ll.head.value).toBe('jank');
});

it('should add to NOT empty list', () => {
    const ll = new LinkedList();
    ll.insert('apples');
    ll.insert('bananas');
    expect(ll.head.value).toBe('bananas');
    expect(ll.head.next.value).toBe('apples');
});

it('should append to empty list', () => {
    const ll = new LinkedList();
    ll.append('apples');
    expect(ll.head.value).toBe('apples');
});

it('should append a value to the end of a linked list', () => {
    const ll = new LinkedList();
    ll.insert('apples');
    ll.insert('bananas');
    ll.append('cucumbers');
    expect(ll.head.value).toBe('bananas');
    expect(ll.head.next.value).toBe('apples');
    // console.log('=======================',ll)
    expect(ll.head.next.next.value).toBe('cucumbers');
    expect(ll.head.next.next.next).toBe(null);
});

it('should return true if a given value is found in the linked list', () => {
    const ll = new LinkedList();
    ll.insert('apples');
    ll.insert('bananas');
    ll.append('cucumbers');
    ll.append('peckles');
    ll.append('bubbles');
    ll.append('cheeky');
    expect(ll.includes('cheeky')).toBe(true);

});

it('should return a string of all the values from the linked list', () => {
    const ll = new LinkedList();
    ll.insert('c');
    ll.insert('b');
    ll.insert('a');
    expect(ll.toString(ll)).toBe('{ a } -> { b } -> { c } -> Null');
});