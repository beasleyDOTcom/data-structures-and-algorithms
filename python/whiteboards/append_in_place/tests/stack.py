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