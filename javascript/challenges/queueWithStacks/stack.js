'use strict'

class Stack{
    constructor(){
        this.top = null;
        // this.storage = [];
    }
    push(value){
        return this.top = new Node(value, this.top);
    }    

    peek(){
        if(this.isEmpty()){
            throw new RangeError('Cannot call isEmpty() on empty stack')
        }
        return this.top.value;
    }

    pop(){
        if(this.isEmpty()){
            throw new RangeError('Cannot pop from empty stack');
        }
        let popper = this.top;
        this.top = this.top.next;
        popper.next=null;
        return popper.value;
    }


    isEmpty(){
        if(!this.top){
            return true;
        }
        else if(this.top.value){
            return false;
        }
    }
}
class Node{
    constructor(value, next= Null){
        this.value = value;
        this.next = next;
    }
}

module.exports = Stack;