/*
 * Programming Quiz: Facebook Friends (7-5)
 * 
Directions:
Create an object called facebookProfile. The object should have 3 properties:

    1. your name
    2. the number of friends you have, and
    3. an array of messages you've posted (as strings)

The object should also have 4 methods:

    1. postMessage(message) - adds a new message string to the array
    2. deleteMessage(index) - removes the message corresponding to the index provided
    3. addFriend() - increases the friend count by 1
    4. removeFriend() - decreases the friend count by 1

 */

// your code goes here
var facebookProfile = {
  name: "Antonijo",
  friends: 171,
  messages: ["What a beautiful day!", "Feeling tired", "Go Go Go!"],
  postMessage: function(message) {
    return facebookProfile.messages.push(message);
  },
  deleteMessage: function(index) {
    return facebookProfile.messages.splice(index, 1);
  },
  addFriend: function() {
    return (facebookProfile.friends += 1);
  },
  removeFriend: function() {
    return (facebookProfile.friends -= 1);
  }
};
