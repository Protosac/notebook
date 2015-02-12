// Create a node constructor which has data and next.
var Node = function() {
  this.data = '';
  this.next = null;
}

// Create a linked-list constructor head and length.
var LinkedList = function() {
  this.head   = null;
  this.length = 0;

}

LinkedList.prototype.add = function(data) {
  var node = new Node(data);

  // if current length is null, assign head?
  if (this.head === null) {
    this.head = node;
    this.length++;
    return this.head;
  }
  // Set current node for the loop
  var currentNode = this.head;

  // Find the node without a next attribute.
  while (currentNode.next) {
    // While there is a next on this node ...
    currentNode = currentNode.next;
    // Move on to the next of the currentNode.
  }

  // Loop breaks when there's no next. Set it.
  currentNode.next = node
  this.length++;
}

LinkedList.prototype.head = function() {
  return this.head;
}

LinkedList.prototype.size = function() {
  return this.length;
}

LinkedList.prototype.indexOf = function(node) {
  var currentNode = this.head;

  for (var i = 0; i < this.length; i++) {
    if (currentNode == node) {
      return index;
    } 
      currentNode = currentNode.next
  }
}

LinkedList.prototype.indexAt = function(index) {
  var currentNode = this.head;

  for (var i = 0; i < this.length; i++) {
    if (i == index) {
      return currentNode;
    } 
      currentNode = currentNode.next
  }
}

LinkedList.prototype.delete = function(index) {

  var nodeToDelete = currentNode.next;
  var beforeNode   = currentNode;
  for (var i = 0; i < this.length; i++) {
    if (i == index - 1) {
      nodeToDelete = null
    } else if (i > index) {
      
    }
  }

}