/*
--problem domain:
given a binary search tree return a list of all of the duplicate keys/values -- iteratively.

--I/O
input       a
          /   \
        a       c
          \    /  \   
           b  b     d


Output: [a, b]


algorithm:
define a function that takes in (BST) as an argument
define new set named "seen"
define an array named "resultsArray"
define a loop that will run while the current node is truthy
if node.value is in seen set, add node.value to resultsArray
else if value is (truthy) value that is not null to seen set
node = node.next
end of loop ****
return resultsArray

Big O:
 - space: O(1)
 - time: O(n)
Testing
 I/O
 edge cases: not BST








*/         

function returnDupes(BST){
    const resultsArray = [];
    const seen = new Set();
    let currentNode = BST.root;
    while(currentNode){
        if(seen.has(currentNode.value)){
            resultsArray.push(currentNode.value)
        } else {
            if(currentNode !== null){
                seen.add(currentNode.value)
            }
        }
        currentNode = currentNode.next;
    }
    return resultsArray;
}


module.exports = returnDupes;