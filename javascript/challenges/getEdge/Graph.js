class Node{
    constructor(value){
        this.value = value;
        // this.neighborsArrayOfObjects = [];
    }
}

class Edge{
    constructor(destination, weight=0){
    
        this.destination = destination;
        this.weight = weight;
    }
}

class Graph{
    constructor(){
        this.vertexies = new Map();
    }

    AddNode(value){
        let node = new Node(value);
        this.vertexies.set(node, [])
        return node;
    }

    AddEdge(origin, destination, weight){
        if(this.vertexies.has(origin) && this.vertexies.has(destination)){
            
            let destinationEdge = new Edge(destination, weight);
            // origin.neighborsArrayOfObjects.push(destinationEdge);
            const edges = this.vertexies.get(origin);
            edges.push(destinationEdge);
            return edges;
        }
        else{
            throw new Error('Both Nodes should exist in Graph in order to creat an "Edge"')
        }
        
    }


     GetNode (value){
    //this should take in a value and return the node associated with that value
        for(let [key, val] of this.vertexies){
        //this for loop looks for a vertex whose value matches the string so we can check it's neighbors
            if(key.value === value){
                return key;
            }
        }
        return false;
    }

    Size(){
        return this.vertexies.size;
    }

    GetNeighbors(node){
       let billy = this.vertexies.get(node);
       return billy;
    }
}

module.exports = Graph;