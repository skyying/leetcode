
# Definition for a binary tree node.

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def sortedArrayToBST(self, arr):
    """
    :type arr: List[int]
    :rtype: TreeNode
    """
    mid = (len(arr))//2
    root = TreeNode(arr[mid])
    root.left = sortedArrayToBST(arr[:mid])
    root.right = sortedArrayToBST(arr[mid+1:])
    return root


