from . add_two_numbers_from_lists import add_two_numbers_from_lists


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


"""
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

"""

def test_first_linked_list():
    # 342 + 465 = 807
    list1 = build_list('342')

    list2 = build_list('465')

    node = add_two_numbers_from_lists(list1.root, list2.root)
    assert node.val == '7'
    assert node.next.val == '0'
    assert node.next.next.val == '8' 


def test_second_case():
    list1 = build_list('0')

    list2 = build_list('0')

    node = add_two_numbers_from_lists(list1.root, list2.root)
    assert node.val == '0'


def test_third_case():
#  Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
# Output: [8,9,9,9,0,0,0,1]
    list1 = build_list('9999999')

    list2 = build_list('9999')

    node = add_two_numbers_from_lists(list1.root, list2.root)
    assert node.val == '8'
    assert node.next.val == '9'
    assert node.next.next.val == '9' 
    assert node.next.next.next.val == '9' 
    assert node.next.next.next.next.val == '0' 
    assert node.next.next.next.next.next.val == '0' 
    assert node.next.next.next.next.next.next.val == '0' 
    assert node.next.next.next.next.next.next.next.val == '1' 