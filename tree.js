var Tree = function(data) {
  this.data     = data;
  this.children = [];
  this.size     = 0;
}

Tree.prototype.add = function(data) {
  var child = new Tree(data);
  
  this.children.push(child);
  this.size++;
}

Tree.prototype.remove = function(node) {
  for (var i = 0; i < this.length; i++) {
    if (this.children[i] == node) {
      this[i] = null;
    }
  }

  this.size--;
}

Tree.prototype.traverseDF = function() {
  for (var i = 0, length = this.children.length; i < length; i++) {
    this.children[i].traverseDF();
  }

  console.log(this.data);
}