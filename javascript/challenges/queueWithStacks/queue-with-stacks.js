'use strict'
const Stack = require('./stack.js');
   // Sudoku
class PseudoQueue{
    constructor(){
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    enqueue(value){
        if(value===0){
            this.stack1.push('0');
            return;
        }
        return this.stack1.push(value);
    }

    dequeue(){
        while(this.stack1.top){
            this.stack2.push(this.stack1.pop())
            
        }
        let firstInLine = this.stack2.pop();
        while(this.stack2.top){
            this.stack1.push(this.stack2.pop())
        }
        return firstInLine;
    }



}
module.exports = PseudoQueue;