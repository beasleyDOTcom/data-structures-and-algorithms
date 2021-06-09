
"""
You're given the head of a Singly Linked List whose nodes are in sorted order with respect to their values. Write a function that returns a modified version of the Linked List that doesn't contain any nodes with duplicate values. The Linked List should be modified in place (i.e., you shouldn't create a brand new list), and the modified Linked List should still have its nodes sorted with respect to their values.

Target Big O:
time: O(n);
space: O(1);

Testing: 
has duplicates
no duplicates


Input: 1->1->3 -> 4 -> 4-> 4-> 5 -> 6 -> 6
output 1 -> 3 -> 4-> 5 -> 6 
Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to None/null if it's the tail of the list. input linkedlist 

Algorithm:
Once we have visited the first node, we want to ask
is this node's value the same as the previous node's value?
if it does have the same value, remove current node in place. 
move on

previousNode: 1 3
 currentNode:   4

"""


def remove_duplicates_from_ll(head):

  if not head:
    return head

  previousNode = head

  while previousNode.next:
    currentNode = previousNode.next

    while currentNode.value == previousNode.value:
      previousNode.next = currentNode.next
      currentNode = currentNode.next
      if not currentNode:
        break

    previousNode = previousNode.next
    if not previousNode:
      break

  return head
