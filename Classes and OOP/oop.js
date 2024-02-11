
// const user = {
//     username: "Gourav",
//     loginCount: 8,
//     signedIn: true,
    
//     getUserDetails: function(){
//         return `username: ${this.username}\nLogin count: ${this.loginCount}\nSigned in: ${this.signedIn}`
//     }
// }

// console.log(user.getUserDetails());


// Constructor
function user(username, contactDetails, password){
    this.username = username;
    this.contactDetails = contactDetails;
    this.password = password;

    this.greetings = function(){
        return `my name is ${this.username}, you can contact me via my email: ${this.contactDetails}`
    }
    return this;
}

const user1 = new user("Gourav Malviya", 'gouravmalviya445@gmail.com', 'Gourav@123');
const user2 = new user("Ayushi Sharma", "ayushisharma34@gmail.comm", "Ayushi@212") 
// console.log(user1.greetings())
// console.log(user2.greetings())

function Car(brand, color, price){
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.carDetails = function(){
        return `The car is ${this.brand} brand, Color is ${this.color} and the price of car is ${this.price}`
    }
}

const carOne = new Car("Hundei", "Blue", '10 lac')
const carTwo = new Car("Mahindra", "Blud-red 4X4", "15 lac")
console.log(carOne.carDetails())
console.log(carTwo.carDetails())