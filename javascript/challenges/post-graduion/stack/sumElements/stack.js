'use strict';
class Stack {
    constructor(){
        this.top = null;
    }
    push(item){
        this.top = new Node(item, this.top)
    }
    pop(){
        if(this.top === null){return 'stack is empty';}
        let temp = this.top.value;
        this.top = this.top.next;
        return temp;
    }
    isEmpty(){
        if(this.top === null){
            return true;
        } else {
            return false;
        }
    }
    peek(){
        if(!this.isEmpty()){
            return this.top.value;
        }
    }
    getMax(){
        if(this.isEmpty()){return null;}
        let top = this.top;
        let max = this.top.value;
        while(top !== null){
            if(max < top.value){
                max = top.value; 
            }
            top = top.next; 
        }
        return max;
    }
}
class Node{
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}
module.exports = Stack;