# whiteboard

## Problem Domain:
given a queue. reverse the values.. iteratively. 

## Input:
queue rear     back <-a <-a <-a front Node{value, next}
## Output:
queue reversed back a-> a-> a-> front
## Algorithm:
var temp = this.rear;
this.rear = this.front;
this.front = temp;
return this;

## Testing:
check if a b c d e becomes e d c b a
it should be a list with a front that does not equal null

## Big O
- space: O(1);
- time: 0(1);