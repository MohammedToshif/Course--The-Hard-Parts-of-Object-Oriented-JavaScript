
//             //----- (01) - (Avoid Duplication with Prototype)


// // Using the prototype chain

// const functionStore = {
//     increment: function(){this.score++;},
//     login: function(){console.log("You're loggedin")}
// };
// const user1 = {
//     name: "Phil",
//     score: 4
// }

// user1.name // name is a property of user1 object
// user1.increment // Error! increment is not!

// // Link user1 and functionStore so the interpreter, on not finding .increment,
// // makes sure to check up in functionStore where it would find it            


//                     // (02)

// // Make the link with Object.create() technique

// const user1 = Object.create(functionStore)
// user1 // {}
// user1.increment // function....

// // Interpreter doesn't find .increment on user1 and
// // looks up the prototype chain to the next object and
// // finds .increment 1 level up                    


//                     // (03)


// // Solution 2 in full

// function userCreator (name, score) {
//     const newUser = Object.create(userFunctionStore);
//     newUser.name = name;
//     newUser.score = score;
//     return newUser;
// };

// const userFunctionStore = {
//     increment: function(){this.score++;},
//     login: function(){console.log("You're loggedin");}
// };

// const user1 = userCreator("Phil", 4);
// const user2 = userCreator("Julia", 5);
// user1.increment();                    


//             //----- (02) - (Prototype Walkthrough)


//         // Solution 2 in full

// function userCreator (name, score) {
//     const newUser = Object.create(userFunctionStore);
//     newUser.name = name;
//     newUser.score = score;
//     return newUser;
// };

// const userFunctionStore = {
//     increment: function(){this.score++;},
//     login: function(){console.log("You're loggedin");}
// };

// const user1 = userCreator("Phil", 4);
// const user2 = userCreator("Julia", 5);
// user1.increment();                    



//         //----- (03) - (Functions are Objects & Functions)


// // Interlude - functions are both objects and functions :/

// function multiplyBy2(num) {
//     return num*2
// }

// multiplyBy2.stored = 5
// multiplyBy2(3)  // 6

// multiplyBy2.stored  // 5
// multiplyBy2.prototype   // {}


// // we could use the fact that allfunctions have a default property on their object version, 'prototype', which is itself an object - to replace our functionStore object



//             //----- (04) - (new Keyword & Share Functions with prototype )
    
    
// //  Complete Solution 3


// function UserCreator(name, score){
//     this.name = name;
//     this.score = score;
// }

// UserCreator.prototype.increment = function(){
//     this.score++;
// };

// UserCreator.prototype.login = function(){
//     console.log("login");
// };

// const user1 = new UserCreator(“Eva”, 9)
//     user1.increment()        



//             //----- (05) - (Review of new)


// //  What if we want to organize our code inside one of our
// // shared functions - perhaps by defining a new inner
// // function

// function UserCreator(name, score){
//     this.name = name;
//     this.score = score;
// }

// UserCreator.prototype.increment = function(){
//     function add1(){
//     this.score++;
//  }

//  // const add1 = function(){this.score++;}

//     add1()
// };

// UserCreator.prototype.login = function(){
//      console.log("login");
// };

// const user1 = new UserCreator(“Eva”, 9)
//     user1.increment()           