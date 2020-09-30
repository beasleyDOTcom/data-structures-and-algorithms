'use strict';
function getEdge(routeArr, graph){

    let dollar = 0;
  
    for(let i = 0; i< routeArr.length-1; i++){        
        //the for loop should iterate through each leg of the trip
        let tripPossible = false;
        let originNode = graph.GetNode(routeArr[i]);
        let destinationNode = graph.GetNode(routeArr[i+1])
        

        //investigate the possible connections from current airport
        let edges = graph.GetNeighbors(originNode);
        for(let edge of edges){

            if(destinationNode === edge.destination){
                dollar += edge.weight;
                tripPossible = true;
                break;
            }
        }
console.log('this is the leg', routeArr[i],'this is dollar', dollar, 'and trip possible', tripPossible)
        if(!tripPossible){
            return 'False, $0'
        }
        // let possible = false;
        //     if(key.value == routeArr[i]){
        //         possible=true;
        //         let result = graph.GetNeighbors(key);
        //         for(let j = 0; j < result.length; j++){
        //             //this loops through the neighbors associated with the current value (i) of input array
                    
              

        //             dollar += result[j].weight;
        //         }
        //     }
    
    }
        // let result = graph.GetNeighbors(node);
        // console.log('this is result', i, result)
        // if(dollar===0){
           
        // } else{
        //     // let vertex = graph.vertexies.get(routeArr[i]);
        //     // dollar += vertex.weight;
        //     // console.log('this is the new dollar', dollar)
        // }
    
    return `True, $${dollar}`;
}

module.exports = getEdge;

//Write a function based on the specifications above, which takes in a graph, and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost.