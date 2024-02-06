
//             //----- (01) - (Creating an Object)


// // Objects - store functions with their associated data!

//     const user1 = {
//     name: "Phil",
//     score: 4,
//     increment: function() {
//     user1.score++;
//      }
// };

// user1.increment(); //user1.score => 4

// //  This is the principle of encapsulation.
// //  Let's keep creating our objects


//             //----- (02) - (Object dot Notations)


// // Creating user2 user 'dot notation'

// const user2 = {}; //create an empty object
// user2.name = "Julia"; //assign properties to that object
// user2.score = 5;
// user2.increment = function() {
//  user2.score++;
// };            


//             //----- (03) - (Object.create)


// // Creating user3 using Object.create

// const user3 = Object.create(null);
// user3.name = "Eva";
// user3.score = 9;
// user3.increment = function() {
//  user3.score++;
// };

// // Our code is getting repetitive, we're breaking our DRY principle
// // And suppose we have millions of users!
// // What could we do?


//             //----- (04) - (Creating Objects with Functions)


// // Solution 1. Generate objects using a function


// function userCreator(name, score) {
//     const newUser = {};
//     newUser.name = name;
//     newUser.score = score;
//     newUser.increment = function() {
//     newUser.score++;
//     };
//     return newUser;
// };

// const user1 = userCreator("Phil", 4);
// const user2 = userCreator("Julia", 5);
// user1.increment()            