'use strict'
/*

handle null root
handle tree with one node
handle tree with multiple nodes 

output: [[3],[9,20],[15,7]]
algorithm:
okay I need to rethink this because it means everything at a particual level regardless of whether it is attached or not should be in a subarray.



*/
 function levelOrderTraversal(root){ 

    let result = [];

    if(!root){
        return result;
    }

    result.push([root.val]);

    function captureLevel(node, level){
        if(!node){
            return false;
        }
        if(level === 1){
            return true;
        }
    }

    return result;
 } 
 module.exports = levelOrderTraversal
