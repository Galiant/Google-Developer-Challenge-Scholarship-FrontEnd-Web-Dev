/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 * 
Directions:
James was creating an array with the colors of the rainbow, and he forgot some colors. The standard rainbow colors are usually listed in this order:

    var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

but James had this:

    var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

Using only the splice() method, insert the missing colors into the array, and remove the color "Blackberry" by following these steps:
    1. Remove "Blackberry"
    2. Add "Yellow" and "Green"
    3. Add "Purple"

 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// your code goes here
rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(5, 0, "Purple");