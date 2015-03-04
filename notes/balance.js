/* 
  Today, we learned about stacks and queues. You'll have to use one of these data structures to answer the following question:
  Create a function that will return true if a string contains balanced parentheses. 
  sample input: balanceParens("(())")
  sample output: true
  sample input: balanceParens("()()")
  sample output: true
  sample input: balanceParens("()(")
  sample output: false
  (What's the relevance? Imagine how an interpreter knows that this is a syntax error: function() {)
*/

var balanceParens = function(string) {
  var parens = [];
  // Create a copy
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(' ) {
      parens.push(string[i]);
      
      var n = (string.length -1) - i;
      for (n; n > 0; n--) {
        if (string[n] === ')' ) {
          return parens.pop;
        }
      }
    }
    
  }
  if (parens.length > 0) {
    return "Unbalanced";
  } else {
    return "Balanced."
  }

};

// MY REVISION

var balanceParens = function(string) {
  var parens = [];
  var brackets = {
      "(" = ")",
      "[" = "]",
      "{" = "}"
  }

  // Create a copy
  for (var i = 0; i < string.length; i++) {
    if (string[i] === '(' ) {
      parens.push(string[i]);
      
      var n = (string.length -1) - i;
      for (n; n > 0; n--) {
        if (string[n] === ')' ) {
          return parens.pop;
        }
      }
    }
    
  }
  if (parens.length > 0) {
    return "Unbalanced";
  } else {
    return "Balanced."
  }

};