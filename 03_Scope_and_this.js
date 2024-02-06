
//             //----- (01) - (Solving Scope with Arrow Functions)

// // We need to introduce arrow functions - which bind this
// // lexically

// function UserCreator(name, score){
//     this.name = name;
//     this.score = score;
// }

// UserCreator.prototype.increment = function(){
//     const add1 = ()=>{this.score++}
//     add1()
// };

// UserCreator.prototype.login = function(){
//     console.log("login");
// };

// const user1 = new UserCreator(“Eva”, 9)
// user1.increment()