'use strict'

class LinkedList{
    constructor(){
        this.head = null;
    }
    nthFromTheEnd(target){
        let current = this.head; 
        let counter = 0;  
        while(current){  //n n=length of linkedlist
          counter++; 
          current = current.next; 
        }
        if(target>counter){
          throw new Error('your query is unsupported')
        } 
        let goal = this.head;
        let targetLocation = counter-target;
        for(let i = 1; i<targetLocation; i++){ //n n n=length of linkedlist
          goal = goal.next;
        }
        return goal.value;
      }

    //perhaps better named insert new head
    insert(value){

        this.head = new Node(value, this.head);
        // console.log('this is head', this.head)
// value null
// value value null
    }

    append(value){
        const newNode = new Node(value);
        //add to the tail end  of the linked list
        if(!this.head){
            this.head = newNode;
            return;
        }
       let currentNode = this.head;
        
       while(currentNode.next){
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
        // by now we know that currentNode is a node, in fact -- the last node.
    }

    insertBefore(targetValue, value){
        let currentNode = this.head;
        console.log(currentNode.value, value, targetValue)
        if(this.head.value === targetValue){
            return this.insert(value, this.head);
        }
        while(currentNode.next){
            if(currentNode.next.value === targetValue){
                currentNode.next = new Node(value, currentNode.next);
                return;
            }
            currentNode = currentNode.next;
        }
    }
    insertAfter(targetValue, value){
        let currentNode = this.head;    
        while(currentNode.next){
            if(currentNode.value === targetValue){
                currentNode.next = new Node(value, currentNode.next);
                return;
            }
            currentNode = currentNode.next;
        }
        return this.append(value);
        
    }
    //includes
    includes(value){
        let currentNode = this.head;
        while(currentNode !== null){
            if(currentNode.value === value){
                return true;
            }
            else{
                currentNode = currentNode.next
            }
                    }
        return false;
    }
    //toString
    toString(value){
        let currentNode = this.head;
        let newArray = [];
        while(currentNode !== null){
            newArray.push('{ '+ currentNode.value + ' } ->')
            currentNode = currentNode.next;
        } 
        let strang = newArray.join(' ').toString();
        return `${strang} Null`;
    }      // "{ a } -> { b } -> { c } -> NULL"
   //          { a } -> { b } -> { c } -> { NULL } -> 

}

class Node{

    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

module.exports = LinkedList;