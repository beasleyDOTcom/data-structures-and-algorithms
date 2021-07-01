from . stack import Stack

"""

Write a function that accepts two arrays. Append the values from the second array into the first,
maintaining the ordering.

The function should modify the first array in place. Do not use a return statement.

For example:
a = [1, 2]; NOTE: If you assign an array to a `const`, you can't re-assign it later, but you can change the values in the array.
b = [3, 4];
append_in_place(a, b);
print(a) prints [1, 2, 3, 4]

Questions:
Can I presume both a and b will be Arrays?  --> Yes. Both arrays will be one dimensional arrays.
Should the second input array (b) be mutated? --> Yes. All items should be removed print(b) prints: []


# algorithm:
remove items from second array:
    pop eveything off of second array
    pushing each value into a stack
pop every item in stack and append to array
    while not isEmpty():
        array1.append(stack.pop())

"""

def append_in_place(a,b):
    # a.extend(b)
    stack = Stack()
    # push items from second array into stack
    for i in range(len(b)):
        stack.push(b.pop())

    while(not stack.isEmpty()):
        # pop every item in stack and append to first array
        a.append(stack.pop())
        
    
