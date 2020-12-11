function reverseLinkedList(linkedList){
    if(linkedList.head === null){return linkedList};
    if(linkedList.head.next === null){ return linkedList};
    let a = null;
    let b = linkedList.head;
    let c = b.next;

    while(c !== null){
        b.next = a;
        a = b;
        b = c;
        c = c.next;
    }
    b.next = a;
    linkedList.head = b;
    return linkedList
}
module.exports = reverseLinkedList;

/*
## Algorithm:
create three variables a, b, c. 
a = null
b = linkedList.head
c = b.next;

     [1] -> [2] -> [3] -> [4] -> null;   
                     a      b      c
point b to a and then move all the pointers up one step until c = null;
then point b to a, c to b
## Pseudo Code:
while(c !== null)
b.next = a;
a = b;
b = c;
c = b.next;
_____

at this point b = 4 and is pointing to c which is null;
b.next = a;
c.next = b;
linkedList.head = c;

*/