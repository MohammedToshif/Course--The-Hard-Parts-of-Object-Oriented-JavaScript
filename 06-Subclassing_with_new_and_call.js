
            //----- (01) - (Create an Object with new)

// subclassing in solution 3
// constructor (pseudoclassical) approach

function userCreator (name, score) {
    this.name = name
    this.score = score
}

userCreator.prototype.sayName = function () {
    console.log("I'm " + this.name);
}
userCreator.prototype.increment = function() {
    this.score++;
}

const user1 = new userCreator("phil", 5);
const user2 = new userCreator("Tim", 4);

user1.sayName();    // "I'm Phil"


                    //  (02)

function paidUserCreator (paidName, paidScore, accountBalance) {
    userCreator.call(this, paidName, paidScore);
    //  userCreator.apply(this, [paidName, paidScore])
    this.accountBalance = accountBalance;
}

paidUserCreator.prototype = Object.create(userCreator.prototype);

paidUserCreator.prototype.increaseBalance = function () {
    this.accountBalance++;
};

const paidUser1 = new paidUserCreator("Alyssa", 8, 25);

paidUser1.increaseBalance()

paidUser1.sayName()     // "I'm Alyssa"


            //----- (02) - (Creating a Subclass with a Constructor)
            
// subclassing in solution 3
// constructor (pseudoclassical) approach       

// Explain subclass with constructor (same code)



            //----- (03) - (Using a call Method in a Constructor)


// subclassing in solution 3
// constructor (pseudoclassical) approach       

// Explain call in constructor (same code)           



            //----- (04) - (Assigning Properties to Instance)


// subclassing in solution 3
// constructor (pseudoclassical) approach       

// Explain assigning properties to instance (same code)          



            //----- (05) - (Prototype Tracing)


// subclassing in solution 3
// constructor (pseudoclassical) approach       

// Explain prototype tracing (same code)             