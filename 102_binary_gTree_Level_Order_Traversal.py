class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

# method 1
def levelOrder(root):
    
    queue, result = [root], [];

    while(any(queue)):
        tmp = []
        for _ in range(len(queue)):
            node = queue.pop(0)
            tmp.append(node.val)
            if(node.left is not None):
                queue.append(node.left)
            if(node.right is not None):
                queue.append(node.right)
        result.append(tmp)
    
    return result;

# method 2

#ideas: using nodecount to know when to record next level
# node count will be 
def levelOrder(root):
    
    result = []
    # base case
    if root is None:
        return result

    queue, nodeCount = [root], 0 
    
    while True:
        levelVal = []
        nodeCount = len(queue)
        if len(queue) == 0:
            return result

        while nodeCount > 0: 
            node = queue.pop(0)
            levelVal.append(node.val)
            if node.left is not None:
                queue.append(node.left)
            if node.right is not None:
                queue.append(node.right)
            nodeCount -= 1
        result.append(levelVal)


root = TreeNode(0)
root.left = TreeNode(1)
root.right = TreeNode(2)
root.left.left = TreeNode(3)
root.left.right = TreeNode(4)

print(levelOrder(root))
