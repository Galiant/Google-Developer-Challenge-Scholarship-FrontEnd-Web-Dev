/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;

// your code goes here!

var article2 = $(".featured").toggleClass("featured");

var article3 = $(article2).next().addClass("featured");