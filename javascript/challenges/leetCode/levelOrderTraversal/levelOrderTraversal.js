'use strict'
/*

handle null root
handle tree with one node
handle tree with multiple nodes 

output: [[3],[9,20],[15,7]]
algorithm:
okay I need to rethink this because it means everything at a particual level regardless of whether it is attached or not should be in a subarray.
      input:    1
            2       3
         4     5        6
  
output  [[1],[2,3], [4,5,6]]


if there is a level here, gather it's nodes into container and then push those into result


*/
 function levelOrderTraversal(root){ 

    let result = [];
    let temp = [];

    function captureLevel(node, level, container){
        if(!node){
            return false;
        }
        if(level === 1){
            container.push(node.val);
            return true;
        }
        // else keep looking for desired level
        let left = captureLevel(node.left, level-1, container);
        let right = captureLevel(node.right, level-1, container);
        return left || right;
    }

    let level = 1;
    let flag = true;
    while(flag){
        // we have successfully reached desired level and put all nodes into temp
        if(captureLevel(root, level, temp)){
            result.push(temp);
            temp = [];
             // try operation on next depth
            level += 1;
        } else { // specified level has no nodes and there's nothing to push
            if(temp.length > 0){
                result.push(temp);
            }
            // work is done --> stop looping
            flag = !flag;
        }
    }

    return result;
 } 
 module.exports = levelOrderTraversal
