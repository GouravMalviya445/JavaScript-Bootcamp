function multiply(n){
    return 5*n
}

multiply.power = 2;

// console.log(multiply(5))
// console.log(multiply.power)
// console.log(multiply.prototype)

function CreateUsers(username, score){
    this.username = username
    this.score = score
}

CreateUsers.prototype.increse = function(){
}

CreateUsers.prototype.printMe = function(){
    console.log(`Score is ${this.score}`)
}

let user1 = new CreateUsers("Gourav", 280)
let user2 = new CreateUsers("Ayushi", 300)

user1.printMe();
