# @param {String} s
# @param {String} p
# @return {Integer[]}
# Find All Anagrams in a String
# using sliding window, and use two array to keep tracking current sub-string
def find_anagrams(s, p)
  return [] if p.size == 0 || s.size == 0 || s.size < p.size

  s_len = s.size
  p_len = p.size
  s_arr = Array.new(26, 0)
  p_arr = Array.new(26, 0)
  a_ord = 97
  right = 0
  ans = []

  p.each_byte do |c|
    p_arr[c - a_ord ] += 1
  end
  p p_arr

  (0...s_len).each do |left|
    while right < s_len && (right - left + 1) <= p_len
      s_arr[(s[right].ord - a_ord)] += 1
      right += 1
    end
    if s_arr == p_arr
      ans << left
    end
    s_arr[s[left].ord - a_ord] -= 1
  end
  ans
end
        
p find_anagrams("baaaa", "aa")