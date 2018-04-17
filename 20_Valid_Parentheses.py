def isValid(s):

    """
    :type s: str
    :rtype: bool
    """
    open = {"{" : "}" , "[" : "]", "(" : ")"}
    close = {"}" : "{", "]" : "[", ")" : "("}
    pair = []

    for char in s:
        if char in open:
            pair.append(char)
        if char in close :
            if len(pair) == 0 or char != open[pair.pop()] :
                return False

    return len(pair) == 0



