const getMax = require('../findMaxRecursively.js');
class Stack{
    constructor(){
        this.top = null;
    }
    isEmpty(){
        return this.top === null ? true : false;
    }
    pop(){
        if(!this.isEmpty()){
            let temp = this.top;
            this.top = this.top.next;

            return temp.value;
        }
    }
    push(val){
       this.top = new Node(val, this.top);
    }
}
class Node{
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}
describe('Find Max Recursively', () => {
    it('should return null if given an empty stack', () => {
        const pancake = new Stack();
        pancake.push(1);
        pancake.pop();
        expect(getMax(pancake)).toBeNull();
    });
    it('should return highest number', () => {
        const cds = new Stack();
        cds.push(1);
        cds.push(4);
        cds.push(88);
        expect(getMax(cds)).toBe(88);
    });
});