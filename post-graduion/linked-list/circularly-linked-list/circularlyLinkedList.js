class Node{
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    addPlayer(person){
        if(!this.head){
            this.head = new Node(person, this.head);
            this.tail = this.head;
        } else {
            this.head = new Node(person, this.head);
            this.tail.next = this.head;
        }
    }
    
}