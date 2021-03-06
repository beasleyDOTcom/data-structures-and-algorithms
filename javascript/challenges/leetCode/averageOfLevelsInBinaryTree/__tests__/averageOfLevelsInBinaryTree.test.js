'use strict';

const averageLevel = require('../averageOfLevelsInBinaryTree.js');

class BinaryTree{
    constructor(){
        this.root;
    }
    add(val){
        function _placeNode(node){
            if(!node){
                return;
            } else if(!node.left){
                node.left = new Node(val);
            } else if(!node.right){
                node.right = new Node(val);
            } else {
                _placeNode(node.left);
                _placeNode(node.right);
            }
        }
        if(!this.root){
            this.root = new Node(val);
        } else {
            _placeNode(this.root);
        }
    }
}
class Node{
    constructor(val, left=null, right=null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

describe('should make a tree that favors left side', () => {
    const tree = new BinaryTree();
    tree.add(7);
    it('should not have null root if add has been called', () => {
        expect(tree.root).toBeDefined();
    });
    it('should add values to tree', () => {
        expect(tree.root.val).toBe(7);
    }); 
    tree.add(8);
    tree.add(9);
    it('should have 8 at root.left.val', () => {
        expect(tree.root.left.val).toBe(8);
    });
    it('should have 9 as root.right.val', () => {
        expect(tree.root.right.val).toBe(9);
    });
    tree.add(10);
    it('should have 10 as root.left.left.val', () => {
        expect(tree.root.left.left.val).toBe(10);
    });
});

describe('Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array', () => {
    const tree = new BinaryTree();
    tree.add(3);
    tree.add(9);
    tree.add(20);
    tree.add(15);
    tree.add(7);

    it('should output [3,14,5, 11]', () => {
        expect(averageLevel(tree.root)).toStrictEqual([3,14.5, 11]);        
    });
});