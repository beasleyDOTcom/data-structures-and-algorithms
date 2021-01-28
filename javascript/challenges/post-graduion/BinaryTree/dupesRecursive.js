function getDupes(BinaryTree){
    const seen = new Set();
    let dupes = [];

    function _helper(node){
        if(!node){ return }
        if(seen.has(node.value) && dupes.indexOf(node.value) === -1){
            dupes.push(node.value)
        } else {
            seen.add(node.value)
        }
        _helper(node.left);
        return _helper(node.right);
    }
    _helper(BinaryTree.root)
    return dupes;
}

module.exports = getDupes;