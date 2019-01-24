# @param {Integer} n
# @return {String[]}
require "pry"

#backtracking practice

def generate_parenthesis(n)
    ans = []  
    def backtrack(ans, n, s = "", left = 0, right =0)
        if s.size == 2 * n
            return
        end
        if left < n
            backtrack(ans, n, s+"(", left+1, right)
        end
        if right < left
           backtrack(ans, n, s+")", left, right+1)
        end
    end
    backtrack(ans, n)
    return ans
end

generate_parenthesis(2)
