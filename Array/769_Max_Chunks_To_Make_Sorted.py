def maxChunksToSorted(arr):
    """
    :type arr: List[int]
    :rtype: int
    """

    chunksNum, valueSum, indexSum = 0, 0, 0

    for i in range(len(arr)):
        valueSum += arr[i]
        indexSum += i

        if valueSum == indexSum:
            chunksNum += 1

    return chunksNum




a = maxChunksToSorted([4, 3, 2, 1, 0])
print(a==1)

b = maxChunksToSorted([0, 1, 4, 2, 3])
print(b==3)

c = maxChunksToSorted([0, 1, 3, 2, 4])
print(c==4)

d = maxChunksToSorted([1, 0, 2, 3, 4])
print(d == 4)

e = maxChunksToSorted([1, 2, 0, 3])
print(e ==2)

d = maxChunksToSorted([1, 2, 4, 0, 3, 5])
print(d)