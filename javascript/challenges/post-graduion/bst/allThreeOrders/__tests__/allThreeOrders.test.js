'use strict';

const { inOrder, preOrder, postOrder } = require('../allThreeOrders.js');

class Node {
    constructor(value, left=null, right=null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    add(val){
        if(!this.root){
            this.root = new Node(val);
        } 
        else {
            let current = this.root;
            while(current){
                if(val > current.value){
                    if(!current.right){
                        current.right = new Node(val)
                        return;
                    } else {
                        current = current.right
                    }
                } else if(val < current.value){
                    if(!current.left){
                        current.left = new Node(val);
                    } else {
                        current = current.left;
                    }
                } else if(val == current.value){
                    // the example shows equal items being added to the right
                   return current.right = new Node(val, current.left, current.right)
                }
            }
        } 

    }
}
describe('does BST add things the way you intend?', () => {
    it('should add node to root', () => {
        const bst = new BST();
        bst.add(99);
        expect(bst.root.value).toStrictEqual(99);
    });
    it('should add lower numbers left', () => {
        const bst = new BST();
        bst.add(10);
        bst.add(5);
        bst.add(5)
        bst.add(2);
        bst.add(1);
        expect(bst.root.value).toStrictEqual(10);
        expect(bst.root.left.value).toStrictEqual(5);
        expect(bst.root.right).toBeNull();
    });
    it('should add numbers to both left and right depending on value', () => {
        const bst = new BST();
        bst.add(10);
        bst.add(5);
        bst.add(5)
        bst.add(2);
        bst.add(1);
        bst.add(15);
        bst.add(22);
        expect(bst.root.right.value).toStrictEqual(15);
        expect(bst.root.right.right.value).toStrictEqual(22);
        expect(bst.root.left.value).toStrictEqual(5);
    });
});

describe('return array with values from bst in specified order', () => {

    it('should return bst in preOrder fashion', () => {
        const binarySearchTree = new BST();
        binarySearchTree.add(10);
        binarySearchTree.add(5);
        binarySearchTree.add(5)
        binarySearchTree.add(2);
        binarySearchTree.add(1);
        binarySearchTree.add(15);
        binarySearchTree.add(22);

        let arr = [10, 5, 2, 1, 5, 15, 22]
        expect(preOrder(binarySearchTree.root, [])).toStrictEqual(arr);
    });

    it('should return bst values in inOrder fashion', () => {
        const binarySearchTree = new BST();
        binarySearchTree.add(10);
        binarySearchTree.add(5);
        binarySearchTree.add(5)
        binarySearchTree.add(2);
        binarySearchTree.add(1);
        binarySearchTree.add(15);
        binarySearchTree.add(22);
        let arr = [1, 2, 5, 5, 10, 15, 22]
        expect(inOrder(binarySearchTree.root, [])).toStrictEqual(arr);
    });

    it('should return bst values in postOrder fashion', () => {
        const binarySearchTree = new BST();
        binarySearchTree.add(10);
        binarySearchTree.add(5);
        binarySearchTree.add(5)
        binarySearchTree.add(2);
        binarySearchTree.add(1);
        binarySearchTree.add(15);
        binarySearchTree.add(22);
        let arr = [1, 2, 5, 5, 22, 15, 10];
        expect(postOrder(binarySearchTree.root, [])).toStrictEqual(arr);
    });
});