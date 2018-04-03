from random import randint

class Solution:
    def __init__(self, nums):
        """
        :type nums: List[int]
        """
        self.arr = nums


    def pick(self, target):
        """
        :type target: int
        :rtype: int
        """
        match_index = []
        for i in range(len(self.arr)):
            if self.arr[i] == target:
                match_index.append(i)

        rnd_index = randint(0, len(match_index)-1)
        return match_index[rnd_index]


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.pick(target)

