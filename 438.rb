# @param {String} s
# @param {String} p
# @return {Integer[]}
def find_anagrams(s, p)
  return [] if p.size == 0 || s.size == 0 || s.size < p.size
  
  slen = s.size
  plen = p.size
  startIndices = []
  arr_s = Array.new(3, 0)
  arr_p = Array.new(3, 0)

  p.each_byte do |c|
    arr_p[c - 97] += 1
  end

  right = 0
        
  (0...slen).each do |left|
    while right < slen && (right - left + 1) <= plen 
      arr_s[(s[right]).bytes.first - 97] += 1
      right +=1 if right < slen
    end
    if arr_s == arr_p
      startIndices << left 
    end
    arr_s[(s[left]).bytes.first - 97] -= 1
  end
  return startIndices
end
        
p find_anagrams("baa", "aa") == [1]