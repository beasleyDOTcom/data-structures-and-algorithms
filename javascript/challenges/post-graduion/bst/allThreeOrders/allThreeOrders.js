/*
Problem Domain:

Write three functions 
  that take in a Binary Search Tree (BST) and an empty
  array, 
  traverse the BST, add its nodes' values to the input array, and 
  return that array. 
  
  The three functions should traverse the BST using the in-order,
  pre-order, and post-order tree-traversal techniques, respectively.

  If you're unfamiliar with tree-traversal techniques, we recommend watching the
  Conceptual Overview section of this question's video explanation before
  starting to code.

Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null.

Input

tree =	      10
		      /	\
		    5	  15
		  /   \		\
	    2	    5	 22
    /
  1
array = []

inOrderTraverse: [1, 2, 5, 5, 10, 15, 22]
left root right
preOrderTraverse: [10, 5, 2, 1, 5, 15, 22]
root left right
postOrderTraverse: [1, 2, 5, 5, 22, 15, 10]
left right root
*/

// FIRST ATTEMPT: 

// function inOrderTraverse(tree, array) {
// // left root right
//   function _helper(root){
//     let arr = [];
//     if(!root){
//       return;
//     }
//     _helper(root.left);
//     array.push(root.value);
//     _heer(root.right);
//   }
//   return array
// }

// function preOrderTraverse(tree, array) {
//   let arr = [];
//   function _helper(root){
//   // root left right
//     if(!root){
//       return;
//     }
//     arr.push(root.value);
//     _helper(root.left);
//     _helper(root.right);
//   }

//   _helper(tree.root)
//   return arr;
// }

// function postOrderTraverse(tree, array) {
//   // left right root

// }

// REFACTORED

    function inOrder(root, array) {
    // left root right
      if(!root){
        return;
      }
      inOrder(root.left, array);
      array.push(root.value);
      inOrder(root.right, array);
  
      return array
    }
    
    function preOrder(root, array) {
      // root left right
      if(!root){
        return;
      }
      array.push(root.value);
      preOrder(root.left, array);
      preOrder(root.right, array);
      return array;
    }
    
    function postOrder(root, array) {
      // left right root
      if(!root){
        return;
      }
      console.log(root.value)

      preOrder(root.left, array);
      preOrder(root.right, array);

      array.push(root.value);
      return array;
    }
    
    module.exports = { inOrder, preOrder, postOrder };

    
    // function inOrderTraverse(tree, array) {
    // 	if(tree !== null){
    // 		inOrderTraverse(tree.left, array);
    // 		array.push(tree.value);
    // 		inOrderTraverse(tree.right, array);
    // 	}
    //   return array;
    // }
    
    // function preOrderTraverse(tree, array) {
    //   if(tree !== null) {
    // 		array.push(tree.value);
    //     preOrderTraverse(tree.left, array);
    // 		preOrderTraverse(tree.left, array);
    // 	}
    //   return array;
    // }
    
    // function postOrderTraverse(tree, array) {
    //   if (tree !== null) {
    // 		postOrderTraverse(tree.left, array);
    // 		postOrderTraverse(tree.right, array);
    // 		array.push(tree.value);
    // 	}
    // 	return array;
    // }
    
    // // Do not edit the lines below.
    // exports.inOrderTraverse = inOrderTraverse;
    // exports.preOrderTraverse = preOrderTraverse;
    // exports.postOrderTraverse = postOrderTraverse;