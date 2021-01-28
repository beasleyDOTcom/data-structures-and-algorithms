const Graph = require('../../getEdge/Graph.js');
const depthFirst = require('../depth-first.js');

class Node {
    constructor(value){
        this.value = value;
        this.friends = [];
    }
}



it('should return null when given an empty list of edges', () => {
    let friends = new Graph();
    let tia = friends.AddNode('tia')
    expect(depthFirst(tia.neighbors)).toBe(undefined)
});

it('should return nodes in a list in order', () => {
    let tia = new Node('tia')
    let blake = new Node('blake')
    let matt = new Node('matt');
    let steve = new Node('steve')
    let jen = new Node('jen')
    let daisy = new Node('daisy')
    daisy.friends.push(jen);
    jen.friends.push(steve);
    steve.friends.push(matt);
    matt.friends.push(blake);
    blake.friends.push(tia)
    tia.friends.push(matt)
console.log(tia, 'that was tia this is diasy', daisy)    
   expect(depthFirst(tia.friends)).toBe(daisy)
});