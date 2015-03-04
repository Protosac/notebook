require 'pry'

def vampire_test(a,b)
  result = (a * b).to_s
  /[a|b]+/.match(result) ? true : false
  binding.pry
end

def palindrome?(str)
  
end