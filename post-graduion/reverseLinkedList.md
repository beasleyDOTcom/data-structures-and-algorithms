# Reverse Linked List

## Problem Domain:
Write a function that, given a singly linked list, returns that same linked list in reverse. 

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
c = linkedList.head;