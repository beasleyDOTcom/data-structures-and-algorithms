const Graph = require('../graph.js');
const Queue = require('../queue.js');
const Bread = require('../breadth-first-graph');

it('should return true if tia has kat as a neighbor', () => {
    friends = new Graph();
    let kat = friends.AddNode('kat')
    let tia = friends.AddNode('tia')
    let cas = friends.AddNode('cas')
    let blake = friends.AddNode('blake')
    friends.AddEdge(tia, kat);
    friends.AddEdge(cas, blake);
    friends.AddEdge(cas, tia);
    friends.AddEdge(tia, blake);
    console.log('this is the naser', Bread(tia))

    

    expect(tia.neighbors.has(kat)).toBeTruthy();
});

it('should return false if we expect blake to have kat as a neighbor', () => {
    friends = new Graph();
    let kat = friends.AddNode('kat')
    let tia = friends.AddNode('tia')
    let cas = friends.AddNode('cas')
    let blake = friends.AddNode('blake')
    friends.AddEdge(cas, blake);
    friends.AddEdge(cas, tia);
    friends.AddEdge(tia, blake);
    

    expect(Bread(blake).includes(kat)).toBeFalsy();
});

it('should return people in correct order', () => {
    friends = new Graph();
    let kat = friends.AddNode('kat')
    let tia = friends.AddNode('tia')
    let cas = friends.AddNode('cas')
    let blake = friends.AddNode('blake')
    friends.AddEdge(tia, kat);
    friends.AddEdge(cas, blake);
    friends.AddEdge(cas, tia);
    friends.AddEdge(tia, blake);
    expect(Bread(tia)).toBe()
});