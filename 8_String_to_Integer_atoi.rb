# @param {String} str
# @return {Integer}
def my_atoi(str)
   s = str.split
   if s[0] =~ /^([+-]?[0-9]+)/
       i = $1.to_i
       return i >= 0 ? [2147483647, i].min : [-2147483648, i].max 
   end    
   0
end



# constant shouldn't be dynamicilly assign
MAX = 2147483647
MIN = 2**31*-1

def my_atoi(str)
  num = str.to_i
  puts MAX
  num = [MAX, num].min
  num = [MIN, num].max
  num
end
