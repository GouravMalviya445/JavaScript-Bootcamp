// let arr = ["Radhey-Krishna", "Sita-Ram", "Jay shree Mahakal"];
// let i = 0;
// while (i<3) {
//     console.log(`Sare Bolo ${arr[i]}`)
    // i++;
// }

// let arr = ["Radhey-Krishna", "Sita-Ram", "Jay shree Mahakal"];
// let i = 0;
// do {
    // console.log(`Sare Bolo ${arr[i]}`)
    // i++
// } while (i>9);

// for (let i = 0; i <= 20; i++) {
//     console.log(i)    
// }

// for (let index = 0; index <= 30; index++) {
//     if(index == 5){
//         console.log("Detected 5")
//         break;
//     }
//     console.log(`value is ${index}`); 
// }

// for (let index = 0; index <= 30; index++) {
//     if(index == 5){
//         console.log("Detected 5")
//         continue;
//     }
//     console.log(`value is ${index}`); 
// }



// +++++++++++++++++++Forof loop:+++++++++++++++++++++

// let numbers = [2,2,3,4,32,3,4];
// for (const num of numbers) {
//     console.log(num);
// }

// let greetings = "Hello World!";
// for (const greet of greetings) {
//     if(greet == " "){
//         continue;
//     }
//     console.log(`Char value is ${greet}`);
// }

// on maps
// let map = new Map();
// map.set("IN","India")
// map.set("USA","United States Of America")
// map.set("Fr","France")
// for (const [key,value] of map) {
//     console.log(key + ' :- ' + value)
// }

// Object
// let obj = {
//     name:"Gourav",
//     age: 19,
//     class:"BCA 1st sem"
// }

// for (const [key, value] of Object.entries(obj)) {
//     console.log(`${key} : ${value}`)
// }


// +++++++++++++++++++++++Forin loop+++++++++++++++++++++++++++

let myObj = {
    game1: "PUBG",
    game2: "Free Fire",
    game3: "COD",
    game4: "Ludo"
}

for (const key in myObj) {
    // console.log(`${key} : ${myObj[key]}`)
}

let array = [2,3,4,3,2,3,2]
for (const key in array) {
    // console.log(`${array[key]}`)
}