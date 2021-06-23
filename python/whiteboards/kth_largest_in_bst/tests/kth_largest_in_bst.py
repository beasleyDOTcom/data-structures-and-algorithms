
def kth_largest_in_bst(bst, k):
    resultArray = []

    def _helper(node):
            if(node == None):
                return
            else:
                _helper(node.left)
                resultArray.append(node.value)
                _helper(node.right)

    _helper(bst.root)

    return resultArray[len(resultArray) - k]

