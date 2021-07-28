"""
Problem domain:
we have two linked lists that represent two numbers we want to add --> in reverse.
Meaning each list respresents a number in reverse. add each of these numbers and return their sum in similar fashion(reversed as a LL).

algorithm:
    define a multiplier that starts out as 1.
    sum = 0
    for each node in list1,
        sum += node.val * multiplier
        multiplier *= 10
    represent sum as ll in reverse

"""
class Node():
    def __init__(self, val=None, next=None):
        self.val = val
        self.next = next


class LinkedList():
    def __init__(self):
        self.root=None
    
    def add(self, val):
        temp = self.root
        if temp == None:
            temp = Node(val)
        elif temp.next == None:
            temp.next = Node(val)
        while temp.next != None:
            temp = temp.next
        
        # we have reached the last valid node in list. add new node after that
        temp.next = Node(val)        

def build_list(string_num):
    
    list = LinkedList()

    i = len(string_num)-1
    while i >= 0:
        list.add(int(string_num[i]))
        i -= 1
    
    return list


def add_two_numbers_from_lists(node1, node2):
    print('this is node1: ', node1)
    print('this is node2: ', node2)


    def add_one_list(node1):
        # define a multiplier that starts out as 1.
        print(node1)
        multiplier = 1
        sum = 0
        if node1.next == None:
            # there is only one number represented in list --> add it to sum and move on. else you have work to do.
            sum += node1.val
        else:
            while node1.next != None:
                sum += node1.val * multiplier
                multiplier *= 10
            # you still need to add node1.next
            sum += node1.next.val * multiplier
    sum = add_one_list(node1) + add_one_list(node2)

    # represent sum as ll in reverse
    result = build_list(str(sum))
    return result.root
    
