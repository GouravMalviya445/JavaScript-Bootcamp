
let myHeros = ["Thor", "Spiderman"]

let heroPowers = {
    thor: "Hamer",
    spiderman:  "Sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.gourav = function(){
    console.log(`Gourav is Present in all objects`)
}

Array.prototype.heyGourav = function(){
    console.log("Gourav is Present in all Array")
}

// myHeros.gourav();
// heroPowers.gourav(); 
// myHeros.heyGourav();
// heroPowers.heyGourav();

// Inheritence ->
const user = {
    name: "Gourav",
    email: 'gouravmalviya445@gmial.com'
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

// When we use inheritence we can link properties and methods of an object to another one
// old syntax:
// teacher.__proto__ = user;

// new Syntax:
// Object.setPrototypeOf(teacher, user)
// console.log(teacher.name)
// console.log(teacher.email)


let myName = "         Gourav                      ";

// adding costomise method in String 
String.prototype.trueLength = function(){
    console.log(`The true Length of String is: ${this.trim().length}`)
}

myName.trueLength();
"  Jay shree Ram  ".trueLength();