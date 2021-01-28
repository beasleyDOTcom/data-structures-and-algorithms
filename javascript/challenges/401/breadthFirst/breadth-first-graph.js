const Graph = require('./graph.js');
const Queue = require('./queue.js');

function breadGraph(node){
    let breadArray = [];
    let seen = new Set();

    let stuckInLine = new Queue();

    stuckInLine.enqueue(node);
    
    seen.add(node);
    
    function _getNeighbors(person){
        if(!seen.has(person)){
            seen.add(person) 
            stuckInLine.enqueue(person)
        } 
    }

    while(!stuckInLine.isEmpty()){
        let front = stuckInLine.dequeue();
        console.log(front.value, 'front . neighbors')
        // console.log('this is front', front)
        breadArray.push(front.value);
        front.GetNeighbors().forEach(_getNeighbors);
        


        // for(child in front.neighbors){
        //     if(!seen.has(child)){
        //         seen.add(child)
        //         i.enqueue(child)
        //     }
        // }

    }

// console.log('this is the bread array ', breadArray)
console.log('this is the bread array ', breadArray)
    return breadArray;
}

module.exports = breadGraph;