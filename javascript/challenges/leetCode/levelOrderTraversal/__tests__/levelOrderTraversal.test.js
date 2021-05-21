const levelOrderTraversal = require('../levelOrderTraversal.js');

class Node {
    constructor(val, left=null, right=null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
class BinaryTree {

    constructor(){
        this.root = null;
    }

}
/*
         1
        2  3
       4     5
     6  7      8

*/

describe('Basic test of levelOrderTraversal', () => {
    it('should pass first test', () => {

        let input = new BinaryTree();
        input.root = new Node(3, new Node(9), new Node(20, new Node(15), new Node(7)));
        expect(levelOrderTraversal(input.root)).toStrictEqual([[3],[9,20],[15,7]]);
    });
    it('should handle triangle tree', () => {
        let input = new BinaryTree();
        input.root = new Node(1);
        input.root.left = new Node(2);
        input.root.right = new Node(3);
        input.root.left.left = new Node(4);
        input.root.right.right = new Node(5);
        input.root.left.left.left = new Node(6);
        input.root.left.left.right = new Node(7);
        input.root.right.right.right = new Node(8);
        let expected = [[1],[2,3],[4,5],[6,7,8]];
        expect(levelOrderTraversal(input.root)).toStrictEqual(expected);

    });
    it('should return array with one if given only one node at root', () => {
        let input = new BinaryTree();
        input.root = new Node(3);
        expect(levelOrderTraversal(input.root)).toStrictEqual([[3]]);
    });
    it('should return empty array if root is null', () => {
        let input = new BinaryTree();
        expect(levelOrderTraversal(input.root)).toStrictEqual([]);
    });
});

