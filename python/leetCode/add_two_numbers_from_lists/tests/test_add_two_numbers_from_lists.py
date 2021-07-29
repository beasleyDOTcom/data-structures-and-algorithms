from . add_two_numbers_from_lists import add_two_numbers_from_lists


# class Node():
#     def __init__(self, val=None, next=None):
#         self.val = val
#         self.next = next


# class LinkedList():
#     def __init__(self):
#         self.root=None
    
#     def add(self, val):
#         temp = self.root
#         if temp == None:
#             self.root = Node(val)
#             return
#         elif temp.next == None:
#             temp.next = Node(val)
#             return
#         while temp.next != None:
#             temp = temp.next
        
#         # we have reached the last valid node in list. add new node after that
#         temp.next = Node(val)        

class ListNode():
    def __init__(self, val=None, next=None):
        self.val = val
        self.next = next

def build_list(string_num):
    """
    Ok, so we want to build a linked list out of this string_num in reverse so that the last char in string_num is the value of the first node of ListNodes.
    make a node for 
    """
    i = len(string_num)-1
    node = ListNode(int(string_num[i]))
    head = node
    i -= 1
    while i >= 0:
        node.next = ListNode(int(string_num[i]))
        i -= 1
        node = node.next
    print('this is head from build list: ', head.val)
    return head

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

    node = add_two_numbers_from_lists(list1, list2)
    assert node.val == 7
    assert node.next.val == 0
    assert node.next.next.val == 8 


def test_second_case():
    list1 = build_list('0')

    list2 = build_list('0')

    node = add_two_numbers_from_lists(list1, list2)
    assert node.val == 0


def test_third_case():
#  Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
# Output: [8,9,9,9,0,0,0,1]
    list1 = build_list('9999999')

    list2 = build_list('9999')

    head = add_two_numbers_from_lists(list1, list2)
    assert head.val == 8
    assert head.next.val == 9
    assert head.next.next.val == 9 
    assert head.next.next.next.val == 9
    assert head.next.next.next.next.val == 0
    assert head.next.next.next.next.next.val == 0 
    assert head.next.next.next.next.next.next.val == 0
    assert head.next.next.next.next.next.next.next.val == 1

def test_super_uneven():
    list1 = build_list('1')
    list2 = build_list('9999999999')

    head = add_two_numbers_from_lists(list1, list2)
    assert head.val == 0
    assert head.next.val == 0
    assert head.next.next.val == 0
    assert head.next.next.next.val == 0
    assert head.next.next.next.next.val == 0
    assert head.next.next.next.next.next.val == 0 
    assert head.next.next.next.next.next.next.val == 0
    assert head.next.next.next.next.next.next.next.val == 0
    assert head.next.next.next.next.next.next.next.next.val == 0 
    assert head.next.next.next.next.next.next.next.next.next.val == 0
    assert head.next.next.next.next.next.next.next.next.next.next.val == 1


def test_flopped_super_uneven():
    list1 = build_list('1')
    list2 = build_list('9999999999')

    head = add_two_numbers_from_lists(list2, list1)
    assert head.val == 0
    assert head.next.val == 0
    assert head.next.next.val == 0
    assert head.next.next.next.val == 0
    assert head.next.next.next.next.val == 0
    assert head.next.next.next.next.next.val == 0 
    assert head.next.next.next.next.next.next.val == 0
    assert head.next.next.next.next.next.next.next.val == 0
    assert head.next.next.next.next.next.next.next.next.val == 0 
    assert head.next.next.next.next.next.next.next.next.next.val == 0
    assert head.next.next.next.next.next.next.next.next.next.next.val == 1