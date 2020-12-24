class Node{
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

class Queue{
    constructor(){
        this.rear = null;
        this.front = null;
    }
    enqueue(val){
        if(this.isEmpty()){
            this.front = new Node(val);
            this.rear = this.front;
            return;
        }
        let temp = new Node(val);
        this.rear.next = temp;
        this.rear = temp;
    }
    dequeue(){
        if(this.isEmpty()){
            return;
        }
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

module.exports = Queue;