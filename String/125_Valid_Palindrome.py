class Solution:
    def __init__(self, s):
        self.s = s
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        s = s.lower()
        alphabet = "0123456789abcdefghijklmnopqrstuvxyz"
        copy = ""
        for c in s:
            if c in alphabet:
                copy = copy + c
        return copy == copy[::-1]