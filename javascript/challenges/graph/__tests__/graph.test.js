const Graph = require('../graph.js')

it('should ', () => {
    friends = new Graph();
    friends.AddNode('kat')
    friends.AddNode('tia')
    friends.AddNode('cas')
    friends.AddNode('blake')
    expect(friends.Size()).toBe(4)
});

it('should ', () => {
    friends = new Graph();
    let kat = friends.AddNode('kat')
    let tia = friends.AddNode('tia')
    let cas = friends.AddNode('cas')
    let blake = friends.AddNode('blake')
    friends.AddEdge(tia, kat);
    console.log(tia.GetNeighbors(), 'THIS IS TIA DOT GET NEIGHBORS')
    expect(tia.neighbors.has(kat)).toBeTruthy();
    expect(tia.GetNeighbors()).toBe()
});
