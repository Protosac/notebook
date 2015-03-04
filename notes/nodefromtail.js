/* 
  Today, we learned about singly-linked lists. To challenge your understanding of this data structure, try to solve the following problem:
  Create a function that will return the node located n-positions from the end of a list.
  
  sample 
  list.add("one");
  list.add("two");
  list.add("three");
  list.add("four");  
  sample input: list.nodeFromTail(0)
  sample output: {data: "four", next: null}
  sample input: list.nodeFromTail(1)
  sample output: {data: "two", next: null}
*/

var nodeFromTail = function(index) {
  // Find index of the node 
  var nodeIndex = (this.length - 1) - index;

  for (var i = 0; i < this.length; i++) {
    if (i === nodeIndex) {
      return this[i];
    }
  }
  
};

// Without knowing the length

var nodeFromTail = function(index) {
  // Current node
  var currentNode = this.head
  // Count all the nodes with 2 pointers
  var count = 0;
  // Start this pointer index spaces from first
  var node  = null;
  while (currentNode.next) {
    currentNode = currentNode.next;
    count++;
    if (count == index) {
      node++;
    }
    node++;
  }
  return node;

  // Subtract index from total nodes
  var node = count - index
  // Loop through nodes to return the index
  for (var i = 0; i < count; i++) {
    if (i === node) {
      return this[i];
    }
  }
}