// The height of a binary tree is the number of edges between the tree's root and its furthest leaf. 
// For example, the following binary tree is of height :





// problem domain:
// define a function that takes in a  n, tree
// and returns a highest number of edges in tree



// input: 7, tree root node with a value of 4
// output: 2


// edge cases:
// tree has no root node return 0 
// tree doesn't have children return 0

// algorithm: 
// if n < 2 return 0
// initialize maxNumberOfCalls that equals 0
// define a _helper function(currentNumberOfCalls, node) and will call recursively
// if(!node){return}
// if(currentNumberOfCalls +1 > maxNumberOfCalls) than update maxNumberOfCalls
// and then call _helper(currentNumberOfCalls +1, node.left)
// and same for node.right

// 	return maxNumberOfNodes














function maxEdges(n, tree) {
    if (n < 2) { return 0 }
    let maxNumberOfCalls = 0;
    function _helper(currentNumberOfCalls, node) {
        if (!node) { return }
        if (currentNumberOfCalls + 1 > maxNumberOfCalls){
            maxNumberOfCalls += 1;
        }
        _helper(currentNumberOfCalls + 1, node.left);
        _helper(currentNumberOfCalls + 1, node.right);
	
    }
    _helper(0, tree.root)
	return maxNumberOfCalls-1;
}
module.exports = maxEdges;


//                          4
//                         /   \
//                      3       2
//                    /
//                  1
// 2

// max no -> 1 2
// current -> 0 1 2 3


