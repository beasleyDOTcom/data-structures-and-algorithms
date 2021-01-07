# Problem Domain:
given a linked list, determine if a value is present ... iteratively.

# Input:
(LinkedList, target)
a -> b -> c -> d -> null
# I/O
target: b ->> true
target 4 ->> false
target node{ value a next b} false ??
# Algorithm:
look at every value in list comparing it with target
    if they are the same, return true
    if you reach the end of the list return false
# Pseudo code

function isPresent(linkedList, target){
    let currentNode = linkedList.head;
    while(currentNode !== null){
        if(currentNode.value === target){
            return true;
        }
    }
    return false;
}

# testing:
target: b ->> true
target 4 ->> false
target node{ value a next b} false ??

# Big O:
- time: O(n)
- space: O(1)