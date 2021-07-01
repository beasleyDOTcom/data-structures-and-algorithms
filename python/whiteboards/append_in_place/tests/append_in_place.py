"""

Write a function that accepts two arrays. Append the values from the second array into the first,
maintaining the ordering.

The function should modify the first array in place. Do not use a return statement.

For example:
const a = [1, 2]; NOTE: If you assign an array to a `const`, you can't re-assign it later, but you can change the values in the array.
const b = [3, 4];
append(a, b);
console.log(a) prints [1, 2, 3, 4]

# algorithm:
remove items from second array:
    pop eveything off of second array
    pushing each value into a stack
pop every item in stack and append to array
    while not isEmpty():
        array1.append(stack.pop())

"""

def append_in_place(a,b):

    # create node class
    class Node:
        def __init__(self, value=None, next=None):
            self.value = value
            self.next = next            

    # create stack
    class Stack:
        def __init__(self):
            self.top = None
        
        def isEmpty(self):
            if self.top == None:
                return True
            else:
                return False

        def peek(self):
            if self.isEmpty():
                raise Exception('cannot peek empty stack')
            else:
                return self.top.value

        def push(self, val):
            self.top = Node(val, self.top)
            return True
        
        def pop(self):
            if self.isEmpty():
                raise Exception('cannot pop empty stack')
            else:
                temp = self.top.value
                self.top = self.top.next
                return temp

    stack = Stack()
    # push items from second array into stack
    for i in reversed(range(len(b))):
        stack.push(b[i])

    while(not stack.isEmpty()):
        # pop every item in stack and append to first array
        a.append(stack.pop())
        
    
