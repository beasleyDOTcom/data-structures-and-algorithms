//Given a BST, Determine if a specific value is present ... Recursively.

function isPresent(value, BinaryTree){
    let present = false;
    function _helper(value, node){
        if(!node){
            return    //null check
        }
        if(node.value === value){
            present = true;
            return;
        }
        else {
            _helper(value, node.left);
            _helper(value, node.right);
        }
    }
    _helper(value, BinaryTree.root);
    return present;
}

module.exports = isPresent;