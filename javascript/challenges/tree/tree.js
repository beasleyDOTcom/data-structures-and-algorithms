'use strict'

class BinaryTree{
    constructor(root=null){
      this.root = root; // a node
    }
    inOrder(){
        const output= [];
        function _inOrder(root){
            if(!root){
                return;
            }
            if(root.left){
                _inOrder(root.left);
            }
            output.push(root.value);
            if(root.right){
                _inOrder(root.right);
            }
        }
        _inOrder(this.root);
        return output;
    }
    postOrder(){
        const output = [];
        function _postOrder(root){
            if(!root){
                return;
            }
            if(root.left){
                _postOrder(root.left);
            }
            if(root.right){
                _postOrder(root.right);
            }
            output.push(root.value);
        }
        _postOrder(this.root);
        return output;
    }
    preOrder(){
        const output = [];
        function _preOrder(root){//the inner function of same name has underscore preceding it to differientiate it from its parent method. 
            // console.log(root, 'this is the root')
          // if root is null return;
            if(!root){
              return;
            }
          // add root's value to the array
            output.push(root.value);
          
            _preOrder(root.left)// if there is no
            
            _preOrder(root.right)
          }
    _preOrder(this.root)
    return output;
    }
  }
  class Node{ // node in the style of binary tree
    constructor(value, left=null, right = null){
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  class BinarySearchTree extends BinaryTree{
    constructor(root){
      super(root);
      this.root = root;
    }
    // if this is helpful use it
    add(value){
      let newNode = new Node(value);
      if(!this.root){
        this.root = newNode;
        console.log('this on line 77', this)
        return this;
      }
      let current = this.root;
      while(current){
        if(current.value < value){
          if(!current.right){
            current.right=newNode;
            console.log('this on line 84', this)
            return this
          }

          current = this.root.right;
        }
        else{ 
          if(!current.left){
            console.log('this on line 91', this)
            current.left = newNode;
            return this;
          }
          current = this.root.left;
        }
      }



    }

        //adds a new node with that value in the correct loaction in the binary search tree.
        //add a value to a node and then place the node in the right location
        // if(!value){ throw new Error('value is not valid')};
        // const newNode = new Node(value);
        // if(!this.root.value){
        //   this.root.value = newNode;
        // }
        // while(this.root){
        //   if(this.root.value === value){return this.root.value};
        //   if(value < this.root.value){
        //     if(!this.root.left){
        //       // console.log('inside of !if', this.root)
        //       this.root.left = newNode;
        //       // console.log('this is this', this)
        //       return this;
        //     } else{
        //        this.root = this.root.left;
        //     }
        //   }
        //   if(value > this.root.value){
        //     if(!this.root.right){
        //       // console.log('inside of right', this.root)
        //       this.root.right = newNode;
        //       return this;
        //     }
        //     this.root = this.root.left
        //   } 
        // }
    // }
    contains(value){
        // return a boolean indicating whether or not the value is in the tree at least once.
      let current = this.root;
      let found = false;
        while(current && !found){
          if(value < current.value){
            current = current.left;
          }
          else if(value > current.value){
            current = current.right;
          } else if (value === current.value){
            found = true;
          }
        }
      return found;
    }
}
//         function _contains(value,root){
//           counter ++;
// // console.log(current.value)
//           while()
//           if(!value){return false};
//           if(value === root.value){
//             return true;
//           }
//           else if(value < root.value){
//             root = root.left;
//             _contains(value, root);
//           }
          
//           else{
//             return false;
//           }
//         }
//         console.log(counter,'this is the counter')
//        return _contains(value, current);
//     }
//   }

//   contains(value){
//     console.log(this.root)
//     let current = this.root;
//     let counter = 0;
//       // return a boolean indicating whether or not the value is in the tree at least once.
//       function _contains(value,root){
//         counter ++;
// // console.log(current.value)
//         if(!value){return false};
//         if(value === root.value){
//           return true;
//         }
//         else if(value < root.value){
//           root = root.left;
//           _contains(value, root);
//         }
//         else if(value > root.value){
//           root = root.right;
//           _contains(value, root);
//         }
//         else{
//           return false;
//         }
//       }
//       console.log(counter,'this is the counter')
//      return _contains(value, current);
//   }
// }
  // const bananas = new Node('b', new Node('happy'), new Node('camper', new Node('sad'), new Node('pat')));
  // const cucumbers = new Node('c', new Node('pears'), new Node('plabian'));
  // const apples = new Node('a', bananas, cucumbers);

  // const tree = new BinaryTree(apples);
  // const results = `${tree.preOrder()} preorder ${tree.inOrder()} inorder, and then post order: ${tree.postOrder()}`;

  //   console.log(results);
    module.exports = {BinarySearchTree, Node};