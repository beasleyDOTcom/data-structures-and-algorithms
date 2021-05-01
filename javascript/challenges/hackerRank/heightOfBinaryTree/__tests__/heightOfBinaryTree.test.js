class Node{
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class BinaryTree{
    constructor(){
        this.root = null;
    }
    addOne(node){
        this.root = node;
    }
}
const getHeight = require('../heightOfBinaryTree.js');
describe('should return max height of binary tree ', () => {
    it('should return 0 if given tree with no root node', () => {
        let bst = new BinaryTree();
        expect(getHeight(0, bst)).toStrictEqual(0);
    });
    it('should return 0 if given a tree with only one node', () => {
        let bst = new BinaryTree();
        bst.addOne(new Node(1))
        expect(getHeight(1, bst)).toStrictEqual(0)
    });
    it('should return 1 if given a tree with only three nodes with two at equal height', () => {
        let bst = new BinaryTree();
        bst.root = new Node(1, new Node(2), new Node(3));
        expect(getHeight(3, bst)).toStrictEqual(1)
    });
    it('should return 3 if given tree that has three edges on left side and none on right', () => {
        let bst = new BinaryTree();
        bst.root = new Node(1, new Node(2, new Node( 3, new Node(4))));
        expect(getHeight(4, bst)).toStrictEqual(3);
    });
});