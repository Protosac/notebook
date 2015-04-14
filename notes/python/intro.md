# Data Structures

* Lists: Most similar to Arrays in other languages.
* Tuples: Unique to Python.
* Dictionaries: Most similar to Hashes or Objects in other languages.

Use collections.deque to turn Stacks into Queues.

## General

Creating variables is as simple as just naming them and assigning a value: `myVar = "This is my string in a variable."`. As in other languages, objects can be assigned to variables, such as lists, tuples and methods.

Super variables: Variables that hold data structures(?).
Positional arguments: The required parameters of a method.
Keyword arguments (kwargs): The optional parameters of a method.
Formal parameter: 

Anything with a non-zero value or length is true. Empty sequences are false.
https://docs.python.org/2/tutorial/introduction.html

`print b,` : Statement will not create a newline after output.

docstrings: Used to automatically generate documentation for code.
`"""This method does xyz and this docstring is the first line of it"""`

Lambdas are used to pass a block argument.

Concepts: Scope, context

#### Immutable objects

Strings, Tuples

#### Common methods

* `len()` : returns length of object.
* `[:]` : slice the object. Returns a copy of it fitting parameters.
* `filter(function, sequence)`: Filters objects on the results of the function. Always returns a a list, string, unicode or tuple.
* `map(function, sequence)`: Performs function on each item in the sequence.
* `reduce(function, sequence)`: Performs function on the result of each subsequent item to return a single value.

## Lists Notation

````
myList = [1,2,3,4,5]  # Create a list and assign to var
print(myList)         # Print list
print(myList[0])      # Print first element of the list
````

## Functions & Conditionals

````
def myFunction():
	print("hello world!")

myFunction()
````

````
int = 2

if int < 3:
	print("2 is less than 3")
elif int > 3:
	print("2 is not less than 3")

````

## Dictionaries

Dictionaries are unordered.