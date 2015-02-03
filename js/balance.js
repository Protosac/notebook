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
      
      for (var n = 1; i < string.length; n++) {
        if (string[n] === ')' ) {
          return parens.pop;
        }
      }
    }
    
  }
  if (parens.length > 0) {
    return "Unbalanced";
  }

};