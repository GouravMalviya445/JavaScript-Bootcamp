// Singleton: when we make an object by the constructor function
// Object.create


const mySimbol = Symbol("key1");
// Object literals :
let user = {
    name : "Gourav",
    age : 18,
    city : "Kota",
    [mySimbol]: "hello", // simbol
    eMail: "gouravmalviya445@gmail.com",
    naam: {
        name: "Radhey",
        fullName: "Radhey Krishn",
        oneMore: "Sita Ram"
    }
}

// For Accessing object keys : using ('.') dot , using ('[]') bracket , using for - In loop.

// console.log(user.name)      // accesing by using dot operator 
// console.log(user["eMail"])  // accessing by using brackets
// console.log(user.naam)   // Object inside object
// console.log(user["naam"])  
// console.log(user.naam.fullName)
// console.log(user.naam["oneMore"])

// console.log(user[mySimbol])          // printing symbol 
// console.log(typeof user[mySimbol])

// for(let keys in user){            // accessing by using for-In loop
//     console.log(keys,user[keys]) 
// }

// updating values:
// Object.freeze(user);  // we can also freeze the value that means we can not do update on object values
user.name = "Kritika";
user.age = 17;
user.city = "Newyork city"
user.eMail = "kriti443@gpt.com";
// console.log(user)

// In java script Function are also treated as values they called first class fnctions.
// user.greeting = ()=>console.log("hello JS user");
// console.log(user.greeting())

user.data = ()=> `Hey my name is ${this.name} and i am ${this.age} years old. I'm from ${this.city}, you can contact me via my email : \"${user.eMail}\"`,
console.log(user.data())

