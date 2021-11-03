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

it('Can successfully add multiple nodes to the end of a linked list', () => {
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

it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    const ll = new LinkedList();
    ll.append('apples');
    ll.append('bananas');
    ll.append('cucumbers');
    ll.insertBefore('cucumbers', 'peaches')
    expect(ll.head.value).toBe('apples');
    expect(ll.head.next.value).toBe('bananas');
    expect(ll.head.next.next.value).toBe('peaches');
    expect(ll.head.next.next.next.value).toBe('cucumbers');
    // expect(ll.head.next.next.next).toBe(null);
});

it('Can successfully insert a node before the first node of a linked list', () => {
    const ll = new LinkedList();
    ll.append('apples');
    ll.append('bananas');
    ll.append('cucumbers');
    ll.insertBefore('apples', 'peaches')
    expect(ll.head.value).toBe('peaches');
    expect(ll.head.next.value).toBe('apples');
    expect(ll.head.next.next.value).toBe('bananas');
    expect(ll.head.next.next.next.value).toBe('cucumbers');
    // expect(ll.head.next.next.next).toBe(null);
});

it('Can successfully insert after a node in the middle of the linked list', () => {
    const ll = new LinkedList();
    ll.append('apples');
    ll.append('bananas');
    ll.append('cucumbers');
    ll.insertAfter('bananas', 'peaches')
    expect(ll.head.value).toBe('apples');
    expect(ll.head.next.value).toBe('bananas');
    expect(ll.head.next.next.value).toBe('peaches');
    expect(ll.head.next.next.next.value).toBe('cucumbers');
    // expect(ll.head.next.next.next).toBe(null);
});

it('Can successfully insert a node after the last node of the linked list', () => {
    const ll = new LinkedList();
    ll.append('apples');
    ll.append('bananas');
    ll.append('cucumbers');
    ll.insertAfter('cucumbers', 'peaches')
    expect(ll.head.value).toBe('apples');
    expect(ll.head.next.value).toBe('bananas');
    expect(ll.head.next.next.value).toBe('cucumbers');
    expect(ll.head.next.next.next.value).toBe('peaches');
    // expect(ll.head.next.next.next).toBe(null);
});

it('Can get kth from end of list', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    ll.append(5);
    ll.append(6);
    expect(ll.nthFromTheEnd(3)).toBe(3);
});

it('where k is greater than length of list', () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    ll.append(5);
    ll.append(6);
    expect(() => ll.nthFromTheEnd(9)).toThrow(Error);
});
// expect(() => sum('junk', null)).toThrowError('a and b must be numeric');
// Where k is greater than the length of the linked list
// Where k and the length of the list are the same
// Where k is not a positive integer
// Where the linked list is of a size 1
// “Happy Path” where k is not at the end, but somewhere in the middle of the linked list
// console.log('0 index from the rear (last one): ', testLL.nthFromTheEnd(0)===0);
// console.log('3rd index from the rear: ',testLL.nthFromTheEnd(3)===3);
// console.log('Error tester: ',testLL.nthFromTheEnd(6)==="you query is unsupported");