'use strict';
function getEdge(routeArr, graph){
    let arr = [];
    for(let i = 0; i< routeArr.length; i++){
        let dollar = 0;
        let result = graph.GetNeighbors(routeArr[i]);
        console.log('this is result', i, result)
        if(result === undefined){
            return 'False, $0'
        } else{
            let vertex = graph.vertexies.get(routeArr[i]);
            dollar += vertex.weight;
            console.log('this is the new dollar', dollar)
        }
    }
    return `True, $${dollar}`;
}

module.exports = getEdge;

//Write a function based on the specifications above, which takes in a graph, and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost.