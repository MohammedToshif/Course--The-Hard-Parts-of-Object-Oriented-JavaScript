
            //----- (01) - (Create an Object with a class)


// subclassing in solution 4            
// ES2015 class approach

class userCreator {
    constructor = (name, score) {
        this.name = name;
        this.score = score;
    }
    sayName () {
        console.log("I am " + this.name);
    }
    increment () {
        this.score++;
    }
}

const user1 = new userCreator("phil", 4);
const user2 = new userCreator("Tim", 4)

user1.sayName()


                    // (02)

class paidUserCreator extends userCreator {
    constructor(paidName, paidScore);
    this.accountBalance = accountBalance;
}                    
increaseBalance () {
    this.accountBalance++;
}

const paidUser1 = new paidUserCreator("Alyssa", 8, 25);

paidUser1.increaseBalance();

paidUser1.sayName();
                 


            //----- (02) - (Creating a Subclass with extends)

// subclassing in solution 4            
// ES2015 class approach

// same code - explain (some part)



            //----- (03) - (Creating an object with a subclass)

// subclassing in solution 4            
// ES2015 class approach

// same code - explain (some part)



            //----- (04) - (Using super in a subclass constructor)

// subclassing in solution 4            
// ES2015 class approach

// same code - explain (some part)            