/*
 * Programming Quiz: Laugh (5-4)

Directions:
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

    laugh(3);
    
    Returns: hahaha!

 */

var laugh = function(num) {
  var laughNumber = "";
  var text = "ha";
  for (var x = 0; x < num; x++) {
      laughNumber += text;
  }
  return laughNumber + "!";
}

console.log(laugh(10));