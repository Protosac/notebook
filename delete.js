var Node = function(data) {
  this.data = '';
  this.next = null;
}

var LinkedList = function() {
  this.head   = null;
  this.length = 0;
}

LinkedList.prototype.add = function(data) {
  // create  new node
  var node = new Node(data);

  // check if it's the first
  if (this.head === null) {
    this.head = node;
    this.length++;
    return this.head;
  }

  // check if not the first, find the last node
  var currentNode = this.head;

  while (currentNode.next) {
    currentNode = currentNode.next
  }

  // Assign new node to current.next
  currentNode.next = node;

  // increment the size
  this.length++;
}