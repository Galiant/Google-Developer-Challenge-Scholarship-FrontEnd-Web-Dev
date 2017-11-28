/*
 * Programming Quiz: Laugh it Off 1 (5-1)

Directions:
Declare a function called laugh() that returns "hahahahahahahahahaha!". Print the value returned from the laugh() function to the console.

 */

// your code goes here

function laugh() {
    return "hahahahahahahahahaha!";
}

console.log(laugh());

/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * 
Directions:
Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

  TIP: You might need a loop to solve this!

Here's an example of the output and how to call the function that you will write:

    console.log(laugh(3));
    Prints: "hahaha!"

 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 */

function laugh(num) {
  var laughNumber = "";
  var text = "ha";
  for( var x = 0; x < num; x++) {
      laughNumber += text;
  }
  return laughNumber + "!";
}

console.log(laugh(3));