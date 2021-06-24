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
            keep_looking = True
            while keep_looking:
                if val == current.value:
                    temp = current.right
                    current.right = Node(val,None, temp)
                    keep_looking = False
                elif val < current.value:

                    if current.left == None:
                        current.left = Node(val)
                    else:
                        current = current.left
                else:
                    # val > current.value
                    if current.right == None:
                        current.right = Node(val)
                    else:
                        current = current.right
                    




def test_add():
    bst = BST(Node(15))
    
    bst.add(5)
    bst.add(20)

    assert bst.root.value == 15
    assert bst.root.left.value == 5
    assert bst.root.right.value == 20
    
def test_none_tree():
    bst = BST(Node())
    expected = None
    actual = kth_largest_in_bst(bst, 0)
    assert actual == expected