class Node{
    constructor(value, left=null, right=null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class BinaryTree{
    constructor(){
        this.root;
    }
    add(val){
        function _chance(){
           return Math.round(Math.random())
        }
        function _helper(node){
            if(!node){ return }
            if(!node.left){
                return node.left = new Node(val);
            } else if (!node.right){
                return node.right = new Node(val);
            } else {
                return _chance === 1 ?
                _helper(node.left) :
                _helper(node.right);
            }
        }
        if(!this.root){
            this.root = new Node(val)
        } else {
            _helper(this.root)
        }
    }
}

module.exports = BinaryTree;