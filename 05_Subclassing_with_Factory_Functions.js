
//             //----- (01) - (Create object with factory functions)

// // Subclassing in solution 2
// // factory function approch            

// function userCreator(name, score) {
//     const newUser = Object.create(userFunctions);
//     newUser.name = name;
//     newUser.score = score;
//     return newUser;
// }

// userFunctions = {
//     sayName: function() {
//         console.log("I'm " + this.name);
//     },
//     increment: function() {
//         this.score++;
//     }
// }

// const user1 = userCreator("Phil", 5);

// user1.sayName();    // "I am Phil"


//                     // (02)

// function paidUserCreator(paidName, paidScore, accountBalance) {
//     const newPaidUser = userCreator(paidName, paidUserFunctions);
//     newPaidUser.accountBalance = accountBalance;
//     return newPaidUser;
// }

// const paidUserFunctions = {
//     increaseBalance : function () {
//         this.accountBalance++;
//     }
// };

// Object.setPrototypeOf(paidUserFunctions, userFunctions)

// const paidUser1 = paidUserCreator("Alyssa", 8, 25);

// paidUser1.increaseBalance();

// paidUser1.sayName();    // "I'm Alyssa"


//             //----- (02) - (Create a Sub-Factory Function)

// // Subclassing in solution 2        (same code with explain)
// // factory function approch                     



//             //----- (03) - (Creating an object with a Sub-Factory Function)

// // Subclassing in solution 2        (same code with explain)
// // factory function approch                     



//             //----- (04) - (Prototype Lookup)

// // Subclassing in solution 2        (same code with explain)
// // factory function approch               



//             //----- (05) - (Subclass Review)


// // Subclassing in solution 2 & 3        (same code with explain)
// // factory function approch  



//             //----- (06) - (Call and Apply)


// // Interlude - We have another way of running a function that
// // allow us to control the assignment of this


// const obj = {
//     num: 3,
//     increment: function(){this.num++;}
// };

// const otherObj = {
//     num: 10
// };

// obj.increment(); // obj.num now 4

// obj.increment.call(otherObj); // otherObj.num now 11

// // obj.increment.apply(otherObj);


// // this always refers to the object to the left of the dot on which the function (method) is
// // being called - unless we override that by running the function using .call()
// // or .apply() which lets us set the value of this inside of the increment function 
