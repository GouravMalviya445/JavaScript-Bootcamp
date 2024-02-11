const promiseOne = new Promise((res,rej)=>{
    // Do an Async task
    // DB Calls, Cryptography, Networks
    setTimeout(()=>{
        // console.log("Async Task is 1 completed")
        res();
    }, 1000)
})

// promiseOne.then(()=> console.log("resolved task 1"))


new Promise((res,rej)=>{
    setTimeout(()=> {
        // console.log("Async task 2 is completed");
        res("resolved task 2");
    }, 1000)
})
// .then((val)=>console.log(val))


const promiseThree = new Promise((res,rej)=>{
    setTimeout(()=>{
        // res({name: "Gourav", email: 'gouravmalviya445@gmail.com', data: ()=> console.log(`Hey my name is ${this.name}, you can contact me via my email${this.email}`)})
    },2000)
})
// promiseThree.then((user)=>console.log(user.data()))


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            // resolve({username: "gouravmalviya445", password: "6261"})
        } else {
            // reject(new Error('Something went wrong please try again latter.'))
        }
    },1000)
})
// promiseFour
//     .then((user)=>{
//         console.log(user);
//         return user.username;
//     })
//     .then((username)=>console.log(username))
//     .catch((error)=>console.log(error))
//     .finally(() => console.log("The promise is either resolved or rejected."))


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = true;
        if(!error){
            // resolve({language: "TypeScript", password: "99284"});
        } else {
            // reject('Something went wrong please try again after some time.');
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        // const response = await promiseFive;
        // console.log(response)
    } catch (error) {
        // console.log(error)
    }
}
// consumePromiseFive();


// async function getAllusers(){
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//         const data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log("E: ",error)
//     }
// }

// getAllusers();


fetch('https://api.github.com/users/GouravMalviya445')
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))



let promisehls = new Promise((resolve, reject) => {
    setTimeout(() => {
        let rd = Math.floor(Math.random()*10+1);
        if(rd>5){
            resolve("Resolved ho gya bro")
        } else {
            reject('Error: aagyi bhai shab.')
        }
    }, 1000);
})

// promisehls
// .then((val)=>console.log(val))
// .catch((error)=> console.log(error))

async function consumePromisehls(){
    try {
        const response = await promisehls;
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromisehls();
