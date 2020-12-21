class Queue{
    constructor(){
        this.rear = null;
        this.front = null;
    }
    enqueue(val){
        this.rear.next = new Node(val);
        this.rear = this.rear.next;
    }
    dequeue(){
        let temp = this.front;
        this.front = this.front.next;
        return temp.value;
    }
    isEmpty(){
        return this.front === null;
    }
    peek(){
        if(!this.isEmpty()){
            return this.front.value;
        }
    }
}
class Node{
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}
module.exports = Queue;