from . kth_largest_in_bst import kth_largest_in_bst

class Node:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

  
class BST:
  def __init__(self, root=None):
    self.root = root

  def add(self, val):
    if self.root == None:
      self.root = Node(val)
    else:
      current = self.root
      while current != None:
        if val == current.value:
          temp = current.right
          current.right = Node(val,None, temp)
        elif val < current.value:
          current = current.left




def test_import_of_name():
    expected = 'True'
    actual = kth_largest_in_bst(True)
    assert actual == expected
    
def test_none_tree():
    bst = BST(Node())
    expected = None
    actual = kth_largest_in_bst(bst, 0)
    assert actual == expected