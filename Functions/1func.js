// console.log("h")
// console.log("e")
// console.log("l")
// console.log("l")
// console.log("o")

// simple function: 
// function name(value){
//     console.log(value);
// }

// Arrow function:
// let name = value=>console.log(value);
// name("Gourav")
// name("Varun")
// name("Kirtan")


// function add(num1,num2){
//     console.log(num1+num2);
// }

// function add(num1,num2){
//     return num1+num2;
// }
// const result = add(1,3);
// console.log(`result: ${result}`)

// function userLoggedIn(username){
//     return `${username} Just Logged In.`;
// }
// console.log(userLoggedIn()) // when you call a function and did't pass any arguments the result will undefined !

function userLoggedIn(username = "Gandu"){    // default value
    if(username !== undefined){
        return `${username} Just Logged In.` 
    }
    else{
        console.log("Please Check username and try again")
    }
}

// when we pass default perameters and call our function and we dont pass any argument when we call func the the defalut 
// value of perameter will be printed.
console.log(userLoggedIn()) 