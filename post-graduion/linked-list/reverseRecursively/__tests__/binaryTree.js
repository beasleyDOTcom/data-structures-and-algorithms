'use strict';
class Node{
    constructor(value, left=null, right=null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class BinaryTree{
    constructor(){
        this.root = null;
    }
    add(value){
        if(this.root === null){
            this.root= new Node(value);
        } else {
            let currentNode = this.root;
            while(currentNode !== null){
                currentNode
            }
        }
    }
}