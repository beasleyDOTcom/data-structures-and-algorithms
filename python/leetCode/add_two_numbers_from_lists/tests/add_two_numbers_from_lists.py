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
class ListNode():
    def __init__(self, val=None, next=None):
        self.val = val
        self.next = next


# class LinkedList():
#     def __init__(self):
#         self.root=None
    
#     def add(self, val):
#         temp = self.root
#         if temp == None:
#             temp = ListNode(val)
#         elif temp.next == None:
#             temp.next = ListNode(val)
#         while temp.next != None:
#             temp = temp.next
        
#         # we have reached the last valid node in list. add new node after that
#         temp.next = ListNode(val)        


def add_two_numbers_from_lists(node1, node2):
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
        return head
    def add_one_list(node):
        # define a multiplier that starts out as 1.
       
        multiplier = 1
        sum = 0
        if node.next == None:
            # there is only one number represented in list --> add it to sum and move on. else you have work to do.
            sum += node.val
        else:
            while node.next != None:
                print('this is node: ', node.val)
                sum += int(node.val) * multiplier
                print('here', sum)
                multiplier *= 10
                node = node.next
            # you still need to add node.next
            sum += node.val * multiplier
        return sum

    sum = add_one_list(node1) + add_one_list(node2)

    # represent sum as ll in reverse
    result = build_list(str(sum))
    return result