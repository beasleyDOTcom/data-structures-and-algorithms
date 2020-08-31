'use strict'
const {BinarySearchTree, Node} = require('../tree.js');
const tree = new Node('a', new Node('b', new Node('d'), new Node('e')), new Node('c', new Node('f')));
const binary = new Node(23, new Node(8, new Node(4), new Node(16, new Node(15), new Node(22))), new Node(42, new Node(27), new Node(85,null, new Node(105))))
// Can successfully instantiate an empty tree
// Can successfully instantiate a tree with a single root node
it('Can successfully instantiate an empty tree', () => {
  const BST = new BinarySearchTree();
  expect(BST).toBeDefined();
});
it('Can successfully instantiate a tree with a single root node', () => {
  const BST = new BinarySearchTree('oh happy dayyyy');
  expect(BST.root).toBe('oh happy dayyyy');
});
it('Can successfully return a collection from an inorder traversal', () => {
  const BST = new BinarySearchTree(tree);  
  expect(BST.inOrder()).toStrictEqual(['d','b','e','a','f','c']);
});

it('Can successfully return a collection from a preorder traversal ',  () => {
  const BST = new BinarySearchTree(tree);  
  expect(BST.preOrder()).toStrictEqual(['a','b','d','e','c','f']);
});

it('Can successfully return a collection from a postorder traversal ', () => {
  const BST = new BinarySearchTree(tree);  
  expect(BST.postOrder()).toStrictEqual(['d','e','b','f','c','a']);
});

it('should accept binary tree and return array with the values ordered appropriately ', () => {
  const BST = new BinarySearchTree(binary);  
  expect(BST.contains(105)).toBeTruthy();
});

it('should place the correct value in the tree', () => {
  const BST = new BinarySearchTree();  
  BST.add(9);
  BST.add(7);
  BST.add(5);
  BST.add(11)
  expect(BST.contains(11)).toBeTruthy();
});

it('should place a number in the correct place of a binary tree', () => {
  const BST = new BinarySearchTree();  
  BST.add(9);
  BST.add(7);
  BST.add(5);
  BST.add(11)
  expect(BST.root.value).toBe(9);
});

it('should place a number in the correct place of a binary tree', () => {
  const BST = new BinarySearchTree();  
  BST.add(9);
  BST.add(7);
  BST.add(5);
  BST.add(11)
  expect(BST.root.left.value).toBe(7);
});

it('should place a number in the correct place of a binary tree', () => {
  const BST = new BinarySearchTree();  
  BST.add(9);
  BST.add(7);
  BST.add(5);
  BST.add(11)
  expect(BST.root.right.value).toBe(11);
});

it('should place a number in the correct place of a binary tree', () => {
  const BST = new BinarySearchTree();  
  BST.add(9);
  BST.add(7);
  BST.add(5);
  BST.add(11)
  expect(BST.root.left.left.value).toBe(5);
});
// const bananas = new Node('b', new Node('happy'), new Node('camper', new Node('sad'), new Node('pat')));
// const cucumbers = new Node('c', new Node('pears'), new Node('plabian'));
// const apples = new Node('a', bananas, cucumbers);
// const results = `${tree.preOrder()} preorder ${tree.inOrder()} inorder, and then post order: ${tree.postOrder()}`;

//   console.log(results);