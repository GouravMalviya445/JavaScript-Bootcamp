// Primitive: 
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// Refference type / Non primitive 
// Array, Object, Function


// primitive
const score = 100;
const scoreValue = 100.4
const isLogedIn = true
const outsideTemp = null
let userName; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// refference
const heros = ["IronMan", "Hulk", "Ceptan America", "Loki"];
// console.log(heros)

let obj = {
    name: "Gourav",
    age: 18,
    classs: "BCA 1st Sem",
    data: ()=> {
        return "hello my name is "+obj.name+" my age is "+obj.age+" i am studing in "+obj.classs+".";
    }
}

// console.log(obj.data())

// memory in js
// Stack (Primitive type), Heap (Non-primitive type)

let naam = "Gourav"
let naam2 = naam
console.log(naam2 === naam)


let data = {
    email: "gourav@gmail.com",
    age:18
}

let data2 = data
console.log(data === data2)
