 with a standard tree, each node/child doesn't know who it's parent is in the same way that a linked list doesn't know what came before it.
traversal: breadth first, depth first.
 pre order, inorder, post order.
pre order means start at root, go left, then go right (evaluates its root first, then checks left, then checks right)
inorder: left, root, right (looks all the way left, then goes to it's root, then looks right)
post order left, right, root. (looks at the end of the tree)

in order D, B, E, A, F, C , good bye.

post order: D, E, B, F, C, A.

# challenge TREE

Traverse trees and return an array that holds the values of the tree in an order that directly correlates to the method of traversal. 

## features
Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
Create a BinaryTree class
Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

Create a BinarySearchTree class
Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.


## Approach & Efficiency
I tried to take as simple an approach as I could.
I would say this has a big O of log n because it splits the search area in half. 