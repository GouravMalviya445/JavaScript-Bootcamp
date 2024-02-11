
const user = {
    username: "Gourav",
    welcomeMsg:function(){
        console.log(`${this.username}, Welcome to Our Website.`);
        // console.log(this);
    }
}

// user.welcomeMsg();
// console.log(this);

// function chai(){
//     let username = "Gourav";
//     console.log(this.username);
// }
// chai();


// arrow function
// syntax: () => {return -_-;}, () => -_-; , () => (-_-);

// simple:
// let add = (a,b) => {
//     return a + b;
// }

// let add = (a,b) => a + b;
// let add = (a,b) => (a + b); // we can use breackets also
// console.log(add(2,3))

// returning Object:
let addTow = (val1,val2) => ({name: "Gourav"})

console.log(addTow(2,3))