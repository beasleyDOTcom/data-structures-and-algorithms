'use strict';
// I got stuck and started searching online.. Big thanks to Kevin. https://www.youtube.com/watch?v=XZnWETlZZ14
/*
            1
        4       5
    4     3   2    4
  5   3  2 1 3 6  5  3
6  8 7
average of [[1],[4,5],[4,3,2,4], [5,3,2,1,6,5,3] [6,8]]
the goal of each level is to add it's children's values to an array that is shared between children of same level nodes.
so I need an array of nodes whose children I want to push into an array.

push first nodes' children into arr1
arr1.forEach node push each child node into arr2
arr2.forEach push each child node into arr3


*/
function averageLevel(root){
    if(!root){return []}
    const result = [];
    let Q = [];

    Q.push(root);
    while(Q.length > 0){
        let currentLevel = [];
        let numOfNodes = Q.length;
        for(let i = 0; i < numOfNodes; i++){
            let current = Q.shift();
            currentLevel.push(current.val);
            if(current.left){
                Q.push(current.left);
            }
            if(current.right){
                Q.push(current.right);
            }
        }
        result.push(currentLevel);
    }
    for(let i = 0; i < result.length; i++){
        let temp = 0;
        for(let k = 0; k < result[i].length; k++){
            temp += result[i][k];
        }
        result[i] = temp / result[i].length;
    }
    return result;



    // const line = new Queue();
    
    // function oneLevel(node){
    //     let level = [];
    //     let joined = [_nodeHelper(node.left), _nodeHelper(node.right)].flat();
    // }
    
    // function _nodeHelper(node){
    //     if(!node){return}
    //     let arr = [];
    //     if(node.left){
    //         arr.push(node.left.val);
    //     }
    //     if(node.right){
    //         arr.push(node.right.val);
    //     }
    //     return arr;
    // }
    // result.push(root.)

    // return result;
}

module.exports = averageLevel;