# whiteboard

## Problem Domain:
given a queue. reverse the values.. iteratively. 

## Input:       
queue rear     rear <-c <-b <-a front Node{value, next}
## Output:
queue reversed rear <-a <-b <-c front
## Algorithm:
hold reference to C
point A at null
b.next = A
this.rear = B
while B is not null
 - C = B.next; 
 - B.next = A;
 - B = C;

## Testing:
check if a b c d e becomes e d c b a
it should be a list with a front that does not equal null

## Big O
- space: O(1);
- time: 0(1);

