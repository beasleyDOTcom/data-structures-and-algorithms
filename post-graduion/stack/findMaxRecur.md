## problem domain:
Given a stack, find the maximum value recursively. 
input:
stack  top = [1] => [4] --> [6] --> [2] --> [22] --> null
output: 22

## edge cases: 
- top is null return null
- stack has multiple values that equal the highest: first one doesnt' get overwritten.
- will all values be numbers?
## algorithm
define a function that takes a stack as an argument
define a highestYet variable with which you can compare each element of the stack.

define a helper function you will call recursively until the stack is null

return highest number.

## pseudo code
function getHighest(stack){
    let highestYet= -9999999999999999999999999999;
    function _helper(node){
        if(!node){return}
        if(node.value > highestYet){
            highestYet = node.value;
            _helper(node.next)
        }else{
        _helper(node.next)
        }
    }
    _helper(stack.top)
    return highestYet ? highestYet : null;
}
## big O 
- space: O(1)
- time: O(n);
## testing 
- top = null;
- top = [1] => [4] --> [6] --> [2] --> [22] --> null; to be 22
- top = [4] --> [3] --> [4]; to be 4
