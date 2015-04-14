myDict = {'first': 1, 'second': 2}
print(myDict['first'])

# Iterate over a list with indices
names = ['John', 'Mary', 'Xandria', 'Milly']

for i in range(len(names))
	print i, names[i]

# 0 John
# 1 Mary
# 2 Xandria
# And so on ...

# Prompt the user:
x = int(raw_input("Enter a number: "))

def fib(n):
	"""A Docline"""
	result = []
	a, b = 0, 1
	while a < n:
		result.append(a)
		a, b = b, a+b
	return result