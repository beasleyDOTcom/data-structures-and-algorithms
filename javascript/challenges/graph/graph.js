
class Graph{
    constructor(){
      this.vertexies = new Set();
    }
  
    AddNode(val){
      let newNode = new Node(val);
      this.vertexies.add(newNode);
      console.log('this is the vertexies', this.vertexies)
      console.log('this is new node', newNode)
     return newNode;
    }
    //.has .get .set will be your friends
  // Adds a new node to the graph
  // Takes in the value of that node
  // Returns the added node
    AddEdge(a, b, weight){
      if(this.vertexies.has(a) && this.vertexies.has(b)){
      // let newEdge = new Edge(a, b, weight)
      a.addEdge(b);
      b.addEdge(a);
      }
      else {throw new Error();}
      
    }
  // Adds a new edge between two nodes in the graph
  // Include the ability to have a “weight”
  // Takes in the two nodes to be connected by the edge
  // Both nodes should already be in the Graph
    GetNodes(){
        console.log('this is the vertexies', this.vertexies)
      return this.vertexies.toString();
    }
  // Returns all of the nodes in the graph as a collection (set, list, or similar)
    
    Size(){
        console.log('before letsize')
       let size =  this.vertexies.size;
       console.log('==============================', size)
        return size;
    }
  
  }
  
  class Node {
    constructor(value){
      this.value = value;
      this.neighbors = new Set();
    }
  
    GetNeighbors(node){
      // Returns a collection of edges connected to the given node
  // Takes in a given node
  // Include the weight of the connection in the returned collection
      // let allMyUniqueNeighbors = new Set();
      // for(edge in this.neighbors){
      //   if(!edge.firstNode === this){
      //     allMyUniqueNeighbors.add(edge.fistNode);
      //   }
      //   if(!edge.secondNode === this){
      //     allMyUniqueNeighbors.add(edge.secondNode)
      //   }
      // }
    return this.neighbors;
    }
    addEdge(node){
      this.neighbors.add(node)
    }
  
  }
  
  
  class Edge {
    constructor(firstNode, secondNode, weight){
      this.firstNode = firstNode;
      this.secondNode = secondNode;
      this.weight = weight;
    }
  }
  
module.exports = Graph;

/*
breadth first means getting everything that is closest to the top of the tree, then go another level down
you can use a set to add "have visited" nodes to it and then 
do a set.has(node you're evaluating)
or enqueue everything nearest you then dequeue them one at a time
if the item dequeued has a child that was not visited enqueue that child. 


*/