var Node = function() {
  this.data     = '';
  this.next     = null;
  this.previous = null;
}

// Create a linked-list constructor head and length.
var LinkedList = function() {
  this.head   = null;
  this.tail   = null;
  this.length = 0;

}

LinkedList.prototype.add = function(data) {
  var node = new Node(data);

  if (this.head === null) {
    this.head = node;
    this.tail = node;
    this.length++;
    return this.head;
  }

  var currentNode = this.head;

  while (currentNode.next){
    currentNode = currentNode.next;
  }

  node.previous    = currentNode;
  this.tail        = node;
  currentNode.next = node;

  this.length++;
}

LinkedList.prototype.remove = function(index) {
  // Establish first node
  if (this[index] == this.head) {
    this.head = null;
  } else if (this[index] == this.tail) {
    var temp      = this.tail
    this.tail     = tail.previous
    temp          = null;
  }

  var counter = 0;
  // If neither of above true, deal with middle nodes.
  // Establish first node for iteration

  while (count < index) {
    currentNode = currentNode.next;
    count++
  }

  var currentNode  = currentNode[count];
  var removeNode   = currentNode.next;
  var prevNode     = currentNode.previous;

  // Count to the node before index
  for (var i = 0; i < this.length; i++) {
    if (i == currentNode[i-1]) {
      currentNode.next   = this[i+2];
      this[i+2].previous = currentNode;
      this[i+1]          = null;
    }
  } 
}