'use strict';

/*

Write a function that takes in a string made up of brackets ( (, [,{, ), ], }) and other optional chars. 

The function should return a boolean indicating whether or not the string is balanced with regards to brackets. 

An opening bracket can’t match a corresponding bracket that comes before it, and a closing bracket can’t match a cooresponding opening bracket that comes after it 

input: ([])(){}(())()() output: true
input: ( } false
input: all brackets


make a copy of the string

helper function that checks the first char and looks for a matching bracket.

algorithm
while current bracket is open, and there are still (characters to view push it into the stack
when it reaches a bracket that is closed, we want to:
  1. pop off the stack  and determine if the brackets qualify as a closing match.
    if not, the return false.
  2. if true, continue popping until stack is empty.
  
  if there is still string left to view restart. 

{
(
["(", "{"]
()
*/

function bracketsDoMatch(stringOfBrackets) {

    let stack = [];
    let open = {
        "(": true,
        "{": true,
        "[": true,
    }
    let matchingBracket = {
        "}": "{",
        ")": "(",
        "]": "["
    }
    // is it open? put it in stack
    // if not, check stack for matching bracket if true, continue

    for (let i = 0; i < stringOfBrackets.length; i++) {
        let current = stringOfBrackets[i];

        if (open[current]) {
            // is this an opening bracket?
            stack.push(current);
        } else {
            if (stack.length === 0) return false;
            if (stack.length !== 0) {

                let topOfStack = stack.pop();

                if (matchingBracket[current] !== topOfStack) {
                    return false;
                }

            }
        }
    }

    return stack.length === 0;
}

 module.exports = bracketsDoMatch
