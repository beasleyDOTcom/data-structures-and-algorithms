
const Graph = require('../Graph.js');
const getEdge = require('../get-edge.js');

it('should be able to add nodes and return correct size', () => {
    let friends = new Graph();
    let jen = friends.AddNode('jen')
    let tia = friends.AddNode('tia');
    let steve = friends.AddNode('steve');
    let chris = friends.AddNode('chris');
    let joe = friends.AddNode('joe');

    expect(friends.Size()).toBe(5);
});

it('should return correct neighbors', () => {
    let friends = new Graph();
    let jen = friends.AddNode('jen')
    let tia = friends.AddNode('tia');
    let steve = friends.AddNode('steve');
    let chris = friends.AddNode('chris');
    let joe = friends.AddNode('joe');
    let thingy = friends.AddEdge(jen, tia, 99)

    expect(friends.vertexies.get(jen)).toStrictEqual(thingy);
});

it('should return a correct dollar ammount for each flight', () => {
    let route = new Graph();
    let sea = route.AddNode('SEA');
    let pdx = route.AddNode('PDX');
    let ams = route.AddNode('AMS');
    let dfw = route.AddNode('DFW');
    let msy = route.AddNode('MSY');

    let route1 = route.AddEdge(sea, pdx, 99);
    let route2 = route.AddEdge(sea, ams, 2999);
    let route3 = route.AddEdge(ams, msy, 202);
    // console.log(route.GetNeighbors(sea))

    expect(getEdge(['SEA', 'AMS', 'MSY'], route)).toStrictEqual('True, $3201');
});
it('should return False, $0 when given bad route', () => {
    let route = new Graph();
    let sea = route.AddNode('SEA');
    let pdx = route.AddNode('PDX');
    let ams = route.AddNode('AMS');
    let dfw = route.AddNode('DFW');
    let msy = route.AddNode('MSY');

    let route1 = route.AddEdge(sea, pdx, 99);
    let route2 = route.AddEdge(sea, ams, 2999);
    // console.log(route.GetNeighbors(sea))

    expect(getEdge(['SEA', 'PDX', 'MSY'], route)).toStrictEqual('False, $0');
});







// [ Edge { destination: Node { value: 'PDX' }, weight: 99 },
// Edge { destination: Node { value: 'AMS' }, weight: 2999 } ]
// {
//     Node { value: 'SEA' },
//     Node { value: 'PDX' },
//     Node { value: 'AMS' },
//     Node { value: 'DFW' },
//     Node { value: 'MSY' } 
// }
