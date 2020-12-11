const reverseLinkedList = require('../reverseLinkedList');
class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
    insert(val){
        this.head = new Node(val, this.head);
    }
}
const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
const testList = new LinkedList();
testList.insert(4);
testList.insert(3);
testList.insert(2);
testList.insert(1);

it('should reverse linked list', () => {
    console.log(linkedList);
    console.log(testList);
    expect(reverseLinkedList(linkedList)).toBe(testList);
});
it('should return list with head of null if given an empty list', () => {
    const badList = new LinkedList();
    expect(reverseLinkedList(badList)).toBe(badList);
});
it('should return same list as given if list only has one node', () => {
    const shortList = new LinkedList()
    shortList.insert(99);
    expect(reverseLinkedList(shortList)).toBe(shortList);
});