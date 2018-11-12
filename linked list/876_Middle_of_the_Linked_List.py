# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# 使用一種兔子跟烏龜跑同一個操場的演算法，兔子跑兩步，烏龜跑一步，如果一直在同一個操場跑，遲早會相遇。
# 如果一個人跑兩步，一個人跑一步，則跑兩步的人到盡頭後，另一個人會剛好跑到中間。
class Solution:
    def middleNode(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        
        if head.next is None:
            return head
        
        fast = head
        slow = head
        
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
            if fast is None or fast.next is None:
                return slow