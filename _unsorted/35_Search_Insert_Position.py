import math
def searchInsert(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    if len(nums) == 0:
        return 0

    diff = 9223372036854775807
    index = None
    for i, n in enumerate(nums):
        if n == target:
            return i
        elif math.fabs(n-target) < diff:
            diff = math.fabs(n-target)
            index = i
    return index if nums[index] > target else index + 1

# there is a more elegant way to solve this problem
# only have to find out how many elements are less than target
# can just return len([i for i in nums if i < target]);

print(searchInsert([1,3,5,6], 2))