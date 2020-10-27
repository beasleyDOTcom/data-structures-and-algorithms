# Sort Recursively
## Problem Domain
- sort Linked List recursively
## I/O
### input
- linkedList head [99] --> [88] --> [999] --> [2] --> null 
### output
- linkedList head [2] --> [88] --> [99] --> [999] --> null
## Edge Cases
- Can I expect positive integers? yes
- Sorted in ascending or descending order? ascending
## Big O time/space
- time: O(n)*
- space O(1)
## Algorithm
- create function that takes in a linked list as an argument - returning a sorted version of that linked list
- null check
- define arr binarySearchArray
- define int index
- define function _pusher(node)
- - null check on node
- - binarySearchArray.push(node.value)
- define function _sort(list)
## Pseudo Code
## Code
## Testing
