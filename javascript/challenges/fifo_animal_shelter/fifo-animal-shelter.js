'use strict'
const Stack = require('./stack.js');

class AnimalShelter{
    constructor(){
        this.stack1= new Stack();
        this.stack2= new Stack(); 
    };
    enqueue(animal){
        let regex = /(cat)|(dog)/i;
        if(!regex.test(animal)){
            throw new Error('NOPE');
        }
        return this.stack1.push(animal);
        
    }
    dequeue(preference){
        let regex = /(cat)|(dog)/i;
        let temp = null;
        if(!regex.test(preference)){
            return null;
        }
        while(this.stack1.top){
            this.stack2.push(this.stack1.pop())
        }
        
        while(this.stack2.top){
            console.log('inside of last loop', this.stack2.top.value)
            if(this.stack2.top.value == preference){
                if(!temp){
                temp = this.stack2.pop();
                }
            }
          
            this.stack1.push(this.stack2.pop())
        }
        console.log('this is temp----------------',temp)
        return temp;
    }
}
module.exports = AnimalShelter;