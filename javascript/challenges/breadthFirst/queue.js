class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    enqueue(value){
     
        let newNode = new Node(value);

        if(!this.front){
            this.front = newNode;
            this.rear = this.front;
            return;
        }
        else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
        return;        
    }
    dequeue(){
        let result = this.front.value;
        this.front = this.front.next;

        return result;
    }
}

class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

module.exports = Queue;