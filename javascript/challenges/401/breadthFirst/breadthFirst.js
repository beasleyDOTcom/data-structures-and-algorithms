Queue = require('./queue.js');


class BreadthFirst extends Queue{

    constructor(front, rear = null){
        super(root)
        this.front = front;
        this.rear = rear;
    }
    getBreadth(tree){
        if(!tree){return}
        const QBreadth = new BreadthFirst();
        QBreadth.enqueue(tree.root);
        while(breadth){
            tree.root = breadth.dequeue();
        }
        if(this.front.left){
            QBreadth.enqueue(front.left);
        }
        if(this.front.right){
            QBreadth.enqueue(front.right);
        }
    }
    

    isEmpty(){
        if(!this.front){
            return true;
        }
        else if(this.top.value){
            return false;
        }
    }
}