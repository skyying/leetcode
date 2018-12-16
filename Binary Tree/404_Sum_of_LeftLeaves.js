// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

/*
 * Problem, return the sum of left leaves
 * idea: while adding nodes to be loop through, mark those tag is left node or right node
 * while loop each node, if they are left leaves, add up their value
 * @param root, object
 * return left leave sum, number
 */

var sumOfLeftLeaves = function(root) {
    let sum = 0;

    if (!root) {
        return sum;
    }

    let queue = [{node: root, pos: false}];

    while (queue.length > 0) {
        let current = queue.pop();
        if (current.pos && !current.node.left && !current.node.right) {
            sum += current.node.val;
        }
        if (current.node.left) {
            queue.push({node: current.node.left, pos: true});
        }
        if (current.node.right) {
            queue.push({node: current.node.right, pos: false});
        }
    }
    return sum;
};
