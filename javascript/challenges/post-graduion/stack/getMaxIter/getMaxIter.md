# Get Max from Stack Iteratively
## problem domain
write a method for Stack that, when called, returns the maximum number in the stack
## algorithm
assign top of stack to max variable
check every item in stack against max
 - if item is greater than max, reassign max with item.
 - else move on to next item
 until stack.isEmpty() is true

# testing
what does it mean to work?
stack.push(1, 2, 3, 4, 6, 4, 88, 3, 222, 8, 888) returns 888
stack.push('what a day', 33, 88) returns 'insufficient funds'


 ## pseudo code
 getMax(){
     // can you copy a stack and mutate the copy without mutating the original stack? spread? assign?
     if(stack.isEmpty()){return 'insuficient funds'}
     let max = stack.pop();
     let temp = new Stack();
     temp.push(max);
     while(!stack.isEmpty()){
         let current = stack.pop();
         if(current > max){
             max = current;
         }
         temp.push(current);
     }
     while(!temp.isEmpty()){
         stack.push(temp.pop());
     }
     return max;
 }
## BigO
- time:O(2n)
- space:O(n) should I count the stack that this is a method of.. space? or just the temp stack I'm initializing for my use?