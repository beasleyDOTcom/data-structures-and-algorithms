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

describe('Basic test of levelOrderTraversal', () => {
    it('should pass first test', () => {

        let input = new BinaryTree();
        input.root = new Node(3, new Node(9), new Node(20, new Node(15), new Node(7)));
        expect(levelOrderTraversal(input)).toStrictEqual([[3],[9,20],[15,7]]);
    });
    it('should return array with one if given only one node at root', () => {
        let input = new BinaryTree();
        input.root = new Node(3);
        expect(levelOrderTraversal(input)).toStrictEqual([3]);
    });
    it('should return empty array if root is null', () => {
        let input = new BinaryTree();
        expect(levelOrderTraversal(input)).toStrictEqual([]);
    });
});

