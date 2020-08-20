'use strict'
const zipLists = require('../llZip/ll-zip.js');
const LinkedList = require('../linkedList/linked-list.js')
it('first value of first list should be first in the zippered list.', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    list1.insert(5);
    list1.insert(3);
    list1.insert(1);

    list2.insert(6);
    list2.insert(4);
    list2.insert(2);

    const zipped = zipLists(list1, list2);

    expect(zipped.head.value).toBe(1);
});

it('should zip lists', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    list1.insert(5);
    list1.insert(3);
    list1.insert(1);

    list2.insert(6);
    list2.insert(4);
    list2.insert(2);
    const zipped = zipLists(list1, list2);
    expect(zipped.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> Null');
});



it('should zip lists if first list is shorter', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    list1.insert(5);
    list1.insert(3);
    list1.insert(1);

    list2.insert(4);
    list2.insert(2);

    const zipped = zipLists(list1, list2);

    expect(zipped.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> Null');
});

it('should zip lists even if second list is shorter', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    list1.insert(3);
    list1.insert(1);

    list2.insert(6);
    list2.insert(4);
    list2.insert(2);
    const zipped = zipLists(list1, list2);
    expect(zipped.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 6 } -> Null');
});