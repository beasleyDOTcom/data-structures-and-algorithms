'use strict';
function getEdge(routeArr, graph){

    let dollar = 0;
    for(let i = 0; i< routeArr.length; i++){
        // let object= vertArr.filter(node => node.value === routeArr[i] ? node : console.log( node,'nope'))
        for(let [key, value] of graph.vertexies){
            // console.log('this is key', key, 'this is value', value)
            if(key.value == routeArr[i]){
                let result = graph.GetNeighbors(key);
                // console.log('this', result.length,' is result', result[0].weight)
                for(let j = 0; j < result.length; j++){
                    // console.log('THIS IS THE RESULT IN FOR LOOP', result[j])
                    dollar += result[j].weight;
                }
            }
        }
        // let result = graph.GetNeighbors(node);
        // console.log('this is result', i, result)
        if(dollar===0){
            return 'False, $0'
        } else{
            // let vertex = graph.vertexies.get(routeArr[i]);
            // dollar += vertex.weight;
            // console.log('this is the new dollar', dollar)
        }
    }
    return `True, $${dollar}`;
}

module.exports = getEdge;

//Write a function based on the specifications above, which takes in a graph, and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost.