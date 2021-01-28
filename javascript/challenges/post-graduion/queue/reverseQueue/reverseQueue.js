class Stack{
    constructor(){
        this.top = null;
    }
    isEmpty(){
        return this.top === null;
    }
    push(val){
        this.top = new Node(val, this.top);
    }
    pop(){
        let temp = this.top;
        this.top = this.top.next;
        return this.temp.value;
    }
}
class Node{
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}
function reverseQueue(q){
    let stack = new Stack();
    while(!q.isEmpty()){
        stack.push(q.dequeue())
    }
    console.log(stack.pop(), stack.pop())
    while(!stack.isEmpty()){
        q.enqueue(stack.pop())
    }
    console.log('this is the queue', q);
    return q;
}
module.exports = reverseQueue;