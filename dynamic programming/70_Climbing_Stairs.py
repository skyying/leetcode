def climbStairs(n):
    """
    :type n: int
    :rtype: int
    """
    first = 1
    second = 2
    if n <= second:
        return n;
    else:
        for i in range(3, n+1):
            first, second = second,  first + second
        return second



        
