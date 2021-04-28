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
        } else {
            let current = this.root;
            while(current){
                if(val > current){
                    current = current.right;
                } else if(val < current){
                    current = current.left;
                }
            }
            current = new Node(val);
        } 

    }
}
describe('return array with values from bst in specified order', () => {
    
    it('should return bst in preOrder fashion', () => {
        
    });

    it('should return bst values in inOrder fashion', () => {
        
    });

    it('should return bst values in postOrder fashion', () => {
        
    });
});