require 'pry'

def collatz(n)
  sequence = [n]
  
  while n != 1
    if n.even?
    	n = n / 2
      sequence.push(n)      
    else
    	n = 3*n + 1
      sequence.push(n)
    end
  end
  sequence.join("->")
end

# Refactor
def collatz(n)
	sequence = [n]
	while n != 1
		n.even? ? n = n / 2 : n = 3*n + 1
		sequence.push(n)
	end
	sequence.join("->")
end

# Typer
class Typer
  def self.is_number?(arg)
    arg.is_a? Integer 
  end
  
  def self.is_string?(arg)
    arg.is_a? String 
  end
  
  def self.is_array?(arg)
    arg.is_a? Array 
  end
  
  def self.is_time?(arg)
    arg.is_a? Time 
  end
  
  def self.is_regexp?(arg)
    arg.is_a? Regexp
  end
  
  def self.is_boolean?(arg)
    arg.is_a? TrueClass || arg.is_a? FalseClass
  end
  
  def self.is_exception?(arg)
    arg.is_a? Exception 
  end
  
  def self.is_nil?(arg)
    arg.nil? 
  end
  
end