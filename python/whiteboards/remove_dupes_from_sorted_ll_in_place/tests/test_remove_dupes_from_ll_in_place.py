from . remove_dupes_from_ll_in_place import remove_duplicates_from_ll


class Node:
  def __init__(self, value, next=None):
    self.value = value
    self.next = next

class LinkedList:
  def __init__(self, head):
    self.head = head

  def add(self, val):
    current= self.head
    # traverse to last node in list
    while current.next:
      current = current.next
    # add node at end of list
    current.next = Node(val)

LL = LinkedList(Node(1))
LL.add(2)
LL.add(3)
LL.add(3)
LL.add(3)
LL.add(4)
LL.add(4)
LL.add(4)
LL.add(5)


def test_happy_path():
    remove_duplicates_from_ll(LL.head)
    assert LL.head.value == 1
    assert LL.head.next.value == 2
    assert LL.head.next.next.value == 3
    assert LL.head.next.next.next.value == 4
    assert LL.head.next.next.next.next.value == 5

def test_null():
    emptyList = LinkedList(None)
    expected = None
    actual = remove_duplicates_from_ll(emptyList.head)
    assert actual == expected


def test_all_dupes():
    ll = LinkedList(Node(3))
    ll.add(3)
    ll.add(3)
    ll.add(3)
    ll.add(3)
    ll.add(3)
    ll.add(3)
    remove_duplicates_from_ll(ll.head)
    actual = ll.head.value
    expected = 3
    assert actual == expected
    assert ll.head.next == None

def test_one_node():
    ll = LinkedList(Node(3))
    expected = ll.head
    actual = remove_duplicates_from_ll(ll.head)
    assert actual == expected
