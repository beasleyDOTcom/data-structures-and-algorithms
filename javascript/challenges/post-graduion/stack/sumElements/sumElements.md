# problem Domain: 
Given a Stack, Find the sum of all elements ... Iteratively.
# algorithm:
instantiate sum as 0;
while stack is not empty:
 - let current = stack.pop();
 - sum += current.value;
 when stack is empty, return sum;  