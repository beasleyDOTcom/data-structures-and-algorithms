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
            this.head = new Node(person, this.tail);
            this.tail = this.head;
            this.tail.next = this.head;
        } else {
            this.head = new Node(person, this.head);
            this.tail.next = this.head;
        }
    }
    removePlayer(player){
        if(!this.head){return null};          // null check

        if(this.head.value === player){       // first node is target
            
            if(this.head === this.tail){ // list has one item that points to itself.
                this.head = null;
                this.tail = null;
                return `Removed ${player} from List`;
            } else {
                this.head = this.head.next;                          // list has more than one item
                this.tail.next = this.head.next; // adjust circular reference to second item in list
                return `Removed ${player} from List`;
            }
        }
// at this point we know that there is a head and it is not the target.
        let a = this.head;
        let b = this.head.next;
       
        while(this.tail !== a){
            if(b.value === player){
                return `Removed ${player} from List`;
            } else {
                b = b.next;
                a = a.next;
            }
        }
        return 'Player Not Found';
        // chad --> jenny --> steven --> chad -->
        // chad --> steven --> chad --> 
        // is player in list?
        // if so, remove player
        // - you need to work with a, b, c's
        // a.next = c;
        // if not, return 'player not found!'
    }
    
}
module.exports = LinkedList;