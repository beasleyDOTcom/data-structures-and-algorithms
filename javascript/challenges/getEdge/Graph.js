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


     GetNodes (){
        // TODO this should be returning whole nodes not just values
        // let obj = {};
        return this.vertexies.keys();
    }

    Size(){
        return this.vertexies.size;
    }

    GetNeighbors(node){
       return this.vertexies.get(node);
    }
}

module.exports = Graph;