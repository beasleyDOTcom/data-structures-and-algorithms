'use strict'
const {BinarySearchTree, Node, FindMax} = require('./tree.js');

 function fizzBuzzTree(tree){
        function _fizzBuzz(root){
            if(!root){ return};
            if(root.value %3 === 0 && root.value % 5 === 0){
                root.value = 'FizzBuzz';
            }
            else if(root.value % 3 === 0){
                root.value = 'Fizz';
            }
            else if(root.value %5 ===0){
                root.value = 'Buzz';
            }
            else root.value = root.value.toString();
            _fizzBuzz(root.left);
            _fizzBuzz(root.right);
            return 
        }
        return _fizzBuzz(tree.root);
    }
module.exports = fizzBuzzTree;