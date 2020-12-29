# Problem Domain:
given a binary tree, determine if a specific value is present.

input: (target, binaryTree)
target = g  return true;
target = G return false;
      a
  b       c
d   e   f   g
# Algorithm:
define a function isPresent(target, binaryTree)
define var present = false;
define _helper(root) null check currentNode / return or continue
if root.value === target present = true return present;
else _helper(root.left) _helper(root.right)

call _helper(binaryTree.root)
return present;

# Code:
function isPresent(target, binaryTree){
    let present = false;
    function _helper(root){
        if(root===null){return}
        else if(root.value === target){
            present = true;
            return present;
        }
    }
    _helper(binaryTree.root)
    return present;
}

# Big O
- time: O(n) because at worst.. every value gets evaluated once. 
- space O(1) because there are only a couple temp variables used === constant.

# Testing:
happy tree
sad tree
