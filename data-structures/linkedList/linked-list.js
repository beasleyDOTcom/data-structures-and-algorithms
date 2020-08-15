'use strict'

class LinkedList{
    constructor(){
        this.head = null;
    }
    //perhaps better named insert new head
    insert(value){

        this.head = new Node(value, this.head);
        // console.log('this is head', this.head)
// value null
// value value null
    }

    append(value){
        const newNode = new Node(value, null);
        //add to the tail end  of the linked list
        if(!this.head){
            this.head = newNode;
            return;
        }
       let currentNode = this.head;
        
       while(currentNode.next !== null){
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;

        // by now we know that currentNode is a node, in fact -- the alst node.


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

    constructor(value, next = undefined){
        this.value = value;
        this.next = next;
    }
}

module.exports = LinkedList;